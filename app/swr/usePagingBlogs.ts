import axios, { AxiosError } from 'axios';
import useSWRInfinite from 'swr/infinite';
import { TBlog } from '../api/posts/route';

type TReturningData = {
    data: TBlog[],
    length: number
}

const fetcher = async (
    [url, pageIndex, pageSize, selectedCategories]: [string, number, string, string[]]
) => {
    const res = await axios.get(url, {
        // params: { selectedCategories: selectedCategories, pageIndex, pageSize },
        paramsSerializer: { indexes: null }
    });
    return res.data;
}

export default function usePagingBlogs(pageSize: number, selectedCategories: string[]) {
    const { data, isLoading, error, size, setSize } = useSWRInfinite<TReturningData, AxiosError>(
        (pageIndex, previousPageData) => {
            if (previousPageData){
                const totalLength = previousPageData.length;
                const currentLength = (pageIndex + 1) * pageSize;
                if(currentLength >= (totalLength + pageSize)) return null;
            }
            return [`/api/posts`, pageIndex, pageSize, selectedCategories];
        },
        fetcher,
        {
            revalidateAll: false
        }
    )
    return ({
        data,
        isLoading,
        isError: error,
        size,
        setSize
    })
}
