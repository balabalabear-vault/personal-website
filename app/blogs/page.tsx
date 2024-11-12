import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Content from "./Content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Blogs",
};

export default async function Page() {
    const data = (await fetch('http://127.0.0.1:3000/api/categories?type=blog'));
    const { data: categories } = await data.json();
    return (
        <Box>
            <Header title="Blog" subtitle="My instagram." />
            <Content
                categories={categories}
                clickable
            />
        </Box>
    )
}
export const dynamic = 'force-dynamic';