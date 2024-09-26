import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Lists from "./Lists";

interface IPost {
    categories: string[],
}

export default async function ProjectListLayer({
    categories
}: Readonly<IPost>) {
    const data = (await fetch('http://127.0.0.1:3000/api/projects', { cache: 'no-store'} ));
    const { data: projects } = await data.json();
    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            <Grid container spacing={2}>
                <Lists projects={projects}/>
            </Grid>
        </Box>
    )
}