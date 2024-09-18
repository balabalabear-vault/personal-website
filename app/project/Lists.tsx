// 'use client';
import Grid from "@mui/material/Grid2";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import ShareIcon from '@mui/icons-material/Share';
import Box from "@mui/material/Box";
import { MouseEventHandler } from "react";

interface ILists {
    projects: {
        id: number,
        duration: string,
        image: string,
        role: string,
        name: string,
        categories: string[],
        link: string,
    }[]
}

export default async function Lists({
    projects
}: Readonly<ILists>) {
    console.log(projects)

    return (
        <Grid container alignItems="stretch">
            {
                projects.map(({
                    id, duration, image, role, name, categories, link
                }) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={id}>
                        <Card key={id} sx={{p: 1}}>
                            <Paper elevation={0} sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={image}
                                    alt={name}
                                    sx={{
                                        objectFit: 'contain'
                                    }}
                                />
                                <Box
                                    p={1}
                                    sx={{
                                        position: 'absolute',
                                        right: '5%',
                                        bottom: 0,
                                        borderRadius: 900,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: 'grey',
                                            cursor: 'pointer'
                                        },
                                    }}
                                >
                                    <Link href={link} target="_blank">
                                        <ShareIcon />
                                    </Link>
                                </Box>
                            </Paper>
                            <Link href={`/project/${id}`} style={{ textDecoration: 'none' }}>
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
                            </Link>
                        </Card>
                    </Grid>

                ))
            }
        </Grid>
    )
}