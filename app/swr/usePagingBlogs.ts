import { useMemo } from 'react';
import { blogs, TBlog } from '../lib/posts';

type TReturningData = {
    data: TBlog[],
    length: number
}

export default function usePagingBlogs(pageSize: number, selectedCategories: string[]) {
    const data = useMemo(() => {
        const selectedCategoriesSet = new Set(selectedCategories);
        const filteredBlog = blogs.filter((blog) => (
            blog.categories.some((category) => selectedCategoriesSet.has(category))
        )).reverse();

        const pages: TReturningData[] = [];
        for (let i = 0; i < Math.max(filteredBlog.length, 1); i += pageSize) {
            pages.push({
                data: filteredBlog.slice(i, i + pageSize),
                length: filteredBlog.length
            });
        }
        return pages;
    }, [pageSize, selectedCategories]);

    return { data };
}
