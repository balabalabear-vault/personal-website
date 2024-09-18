import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import ArticleListLayer from "./ArticleListLayer";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";

export default async function Page() {
    const data = (await fetch('http://localhost:3000/api/posts/categories?type=blog'));
    const { data: categories} = await data.json();
    return (
        <Box>
            <Header title="Blog" subtitle="My instagram." />
            <CategoryLayer categories={categories} clickable={true}/>
            <ArticleListLayer categories={categories}/>
        </Box>
    )
}