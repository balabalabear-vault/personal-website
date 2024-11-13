'use client';
import { Paper, Stack, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { TBlog } from "../../api/posts/route";
import CategoryLayer from "../../components/CategoryLayer/CategoryLayer";
import JBox from "../../components/JBox/JBox";
import JEmptyList from "../../components/JEmptyList/JEmptyList";

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '8px'
});

type TArticleListLayer = {
    blogs: TBlog[] | undefined
}

export default function Lists({
    blogs
}: Readonly<TArticleListLayer>) {
    const router = useRouter();
    const handleClick = (url: string) => router.push(url);
    return (
        <Grid container spacing={2} mb={1} alignItems="stretch">
            {
                blogs && blogs.length
                    ? (
                        blogs.map(({
                            id,
                            categories,
                            title,
                            content,
                            createdAt,
                        }) => (
                            <Grid
                                key={id}
                                size={{ xs: 12, sm: 6 }}
                                onClick={() => handleClick(`/blogs/${id}`)}
                            >
                                <Paper sx={{
                                    padding: 2,
                                    '&:hover': {cursor: 'pointer' },
                                    height: "100%"
                                }}>
                                    <Stack height="100%">
                                        <CategoryLayer categories={categories} clickable={false} />
                                        <JBox needsDivider>
                                            <Typography variant="h6">{title}</Typography>
                                        </JBox>
                                        <StyledTypography variant="body1">
                                            {content}
                                        </StyledTypography>
                                        <Typography variant="subtitle2" textAlign="right" marginTop="auto">
                                            {DateTime.fromISO(createdAt.toString()).setLocale('en').toLocaleString(DateTime.DATE_FULL)}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))
                    ) : (
                        <JEmptyList />
                    )
            }
        </Grid>
    )
}