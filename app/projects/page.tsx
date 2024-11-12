import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import Content from "./Content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Projects",
};

export default async function Page() {
    const data = (await fetch('http://127.0.0.1:3000/api/categories?type=project'));
    const { data: categories} = await data.json();
    return (
        <Box>
            <Header title="Project" subtitle="Everything about my past working experience and personal projects." />
            <Content
                categories={categories}
                clickable
            />
        </Box>
    )
}
export const dynamic = 'force-dynamic';