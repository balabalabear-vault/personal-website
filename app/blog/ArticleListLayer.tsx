import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Lists from "./cardLayout/Lists";

interface IPost {
    categories: string[],
}

export default async function ArticleListLayer({
    categories
}: Readonly<IPost>) {
    const data = (await fetch('http://localhost:3000/api/posts', { cache: 'no-store'} ));
    const { data: posts } = await data.json();

    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            <Grid container spacing={2}>
                <Lists posts={posts}/>
            </Grid>
        </Box>
    )
}