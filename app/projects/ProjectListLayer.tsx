import { Box, Typography } from "@mui/material";
import JEmptyList from "../components/JEmptyList/JEmptyList";
import Lists from "./Lists";

interface IPost {
    projects: any
}

export default function ProjectListLayer({
    projects
}: Readonly<IPost>) {
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