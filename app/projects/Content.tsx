'use client';
import { useState } from "react";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
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
    const { projects } = useProjects(selected);

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