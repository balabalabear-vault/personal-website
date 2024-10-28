'use client';
import { useState } from "react";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import JLoading from "../components/JLoading/JLoading";
import useProjects from "../swr/useProjects";
import ProjectListLayer from "./ProjectListLayer";

type TContent = {
    categories: string[],
    clickable: boolean,
}

export default function Content({
    categories,
    clickable,
}: Readonly<TContent>) {
    const [selected, setSelected] = useState<string[]>(categories);
    const { projects, isLoading } = useProjects(selected);

    if(isLoading) return <JLoading />
    return (
        <>
            <CategoryLayer
                categories={categories}
                clickable={clickable}
                selected={selected}
                onChange={setSelected}
            />
            <ProjectListLayer projects={projects}/>
        </>
    )
}