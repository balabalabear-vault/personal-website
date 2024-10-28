'use client';

import { useState } from "react";
import useSWR from 'swr'
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import ArticleListLayer from "./ArticleListLayer";
import fetcher from "../swr/fetcher";
import JLoading from "../components/JLoading/JLoading";
import useBlogs from "../swr/useBlogs";

type TContent = {
    categories: string[],
    clickable: boolean,
}

export default function Content({
    categories,
    clickable,
}: Readonly<TContent>) {
    const [selected, setSelected] = useState<string[]>(categories);
    const { blogs, isLoading } = useBlogs(selected);

    if(isLoading) return <JLoading />

    return (
        <>
            <CategoryLayer
                categories={categories}
                clickable={clickable}
                selected={selected}
                onChange={setSelected}
            />
            <ArticleListLayer blogs={blogs} />
        </>
    )
}