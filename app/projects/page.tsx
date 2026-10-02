import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import { categories } from "../lib/categories";
import Content from "./Content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Page() {
    return (
        <Box>
            <Header title="Project" subtitle="Everything about my past working experience and personal projects." />
            <Content
                categories={categories.project}
                clickable
            />
        </Box>
    )
}