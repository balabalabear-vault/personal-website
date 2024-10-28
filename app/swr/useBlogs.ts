import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url: string, selectedCategories: string[]) => {
    const res = await axios.get(url, { params: selectedCategories });
    return res.data;
}

export default function useBlogs(selectedCategories: string[]) {
    const { data, error, isLoading } = useSWR(
        ["/api/posts", selectedCategories],
        ([url, categories]) => fetcher(url, categories)
    )
    return {
        blogs: data,
        isLoading,
        isError: error
    }
}