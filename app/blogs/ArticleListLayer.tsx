'use client';
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Lists from "./cardLayout/Lists";
import JEmptyList from "../components/JEmptyList/JEmptyList";

interface IPost {
    blogs: any,
}

export default function ArticleListLayer({
    blogs
}: Readonly<IPost>) {
    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            <Grid container spacing={2}>
                {
                    blogs.length
                    ? (<Lists posts={blogs}/>)
                    : <JEmptyList />
                }
            </Grid>
        </Box>
    )
}
export const dynamic = 'force-dynamic';