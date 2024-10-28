import Grid from "@mui/material/Grid2";

import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import JBox from "../components/JBox/JBox";
import JLink from "../components/JLink/JLink";
import { TPost } from "./ProjectListLayer";

export default function Lists({
    projects
}: Readonly<TPost>) {
    return (
        <Grid container alignItems="stretch" spacing={2}>
            {
                projects.map(({
                    id, duration, image, role, name, categories
                }) => (
                    <Grid
                        key={id}
                        size={{ xs: 12, sm: 6 }}
                        sx={{
                            transition: "transform 0.15s ease-in-out",
                            '&:hover': { transform: "scale3d(1.05, 1.05, 1)" }
                        }}
                    >
                        <JLink href={`/projects/${id}`} newTab={false} noDecoration>
                            <Card key={id} sx={{ p: 1, height: '100%' }}>
                                <Paper elevation={1}>
                                    <JBox needsDivider style={{ p: 2 }}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={image}
                                            alt={name}
                                            sx={{
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </JBox>
                                </Paper>
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography gutterBottom variant="h6">
                                            {name}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            {role}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography gutterBottom variant="subtitle1">
                                            {duration}
                                        </Typography>
                                        <CategoryLayer categories={categories} clickable={false} />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </JLink>
                    </Grid>

                ))
            }
        </Grid>
    )
}