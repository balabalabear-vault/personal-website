'use client';

import { useState } from "react";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import JLoading from "../components/JLoading/JLoading";
import useBlogs from "../swr/useBlogs";
import ArticleListLayer from "./ArticleListLayer";

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