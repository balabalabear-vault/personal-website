import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Lists from "./cardLayout/Lists";
import JEmptyList from "../components/JEmptyList/JEmptyList";

interface IPost {
    categories: string[],
}

export default async function ArticleListLayer({
    categories
}: Readonly<IPost>) {
    const data = (await fetch('http://127.0.0.1:3000/api/posts', { cache: 'no-store'} ));
    const { data: posts } = await data.json();

    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            <Grid container spacing={2}>
                {
                    posts.length
                    ? (<Lists posts={posts}/>)
                    : <JEmptyList />
                }
                
            </Grid>
        </Box>
    )
}