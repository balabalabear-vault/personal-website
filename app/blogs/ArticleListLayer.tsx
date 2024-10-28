'use client';
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Lists from "./cardLayout/Lists";
import JEmptyList from "../components/JEmptyList/JEmptyList";

export type TArticleListLayer =  {
    blogs: {
        id: number,
        categories: string[],
        title: string,
        content: string,
        createdAt: string
    }[]
}

export default function ArticleListLayer({
    blogs
}: Readonly<TArticleListLayer>) {
    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            <Grid container spacing={2}>
                {
                    blogs.length
                    ? (<Lists blogs={blogs}/>)
                    : <JEmptyList />
                }
            </Grid>
        </Box>
    )
}

export const dynamic = 'force-dynamic';