import { Box, Typography } from "@mui/material";
import JEmptyList from "../components/JEmptyList/JEmptyList";
import Lists from "./Lists";

export type TPost = {
    projects: {
        id: string;
        name: string;
        role: string;
        image: string;
        duration: string;
        categories: string[]
    }[]
}

export default function ProjectListLayer({
    projects
}: Readonly<TPost>) {
    return (
        <Box>
            <Typography variant="h4" mb={2}>Latest</Typography>
            {
                projects.length
                    ? (<Lists projects={projects} />)
                    : <JEmptyList />
            }
        </Box>
    )
}
export const dynamic = 'force-dynamic';