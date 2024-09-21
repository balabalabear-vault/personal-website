import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import ProjectListLayer from "./ProjectListLayer";

export default async function Page() {
    const data = (await fetch('http://localhost:3000/api/categories?type=project'));
    const { data: categories} = await data.json();
    return (
        <Box>
            <Header title="Project" subtitle="Everything about my past working experience and personal projects." />
            <CategoryLayer categories={categories} clickable={true}/>
            <ProjectListLayer categories={categories}/>
        </Box>
    )
}