'use client';
import { Paper, Typography, Divider, Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CategoryLayer from "../../components/CategoryLayer/CategoryLayer";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link";

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '8px'
});

interface ILayoutOne {
    posts: {
        id: number,
        categories: string[],
        title: string,
        content: string,
        likes: number,
        views: number,
        createdAt: string
    }[]
}


export default function Lists({
    posts
}: Readonly<ILayoutOne>) {
    return (
        <>
            {
                posts.map(({
                    id,
                    categories,
                    title,
                    content,
                    likes,
                    views,
                    createdAt,
                }) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={id}>
                        <Link href={`/blog/${id}`} style={{ textDecoration: 'none' }}>
                            <Paper sx={{
                                padding: 2,
                                '&:hover': {
                                    cursor: 'pointer',
                                    elevation: 3
                                }
                            }}>
                                <CategoryLayer categories={categories} clickable={false} />
                                <Typography variant="h6">{title}</Typography>
                                <Divider />
                                <StyledTypography variant="body1">
                                    {content}
                                </StyledTypography>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                        <Grid container alignItems="center">
                                            <FavoriteIcon /> {likes}
                                        </Grid>
                                        <Grid container alignItems="center">
                                            <RemoveRedEyeIcon /> {views}
                                        </Grid>
                                    </Grid>
                                    <Typography variant="subtitle2">{createdAt}</Typography>
                                </Box>
                            </Paper>
                        </Link>
                    </Grid>
                ))
            }
        </>
    )
}