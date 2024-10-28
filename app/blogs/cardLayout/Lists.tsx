'use client';
import { Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CategoryLayer from "../../components/CategoryLayer/CategoryLayer";
import JBox from "../../components/JBox/JBox";
import JLink from "../../components/JLink/JLink";
import { DateTime } from "luxon";
import { TArticleListLayer } from "../ArticleListLayer";

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '8px'
});

export default function Lists({
    blogs
}: Readonly<TArticleListLayer>) {
    return (
        <>
            {
                blogs.map(({
                    id,
                    categories,
                    title,
                    content,
                    createdAt,
                }) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={id}>
                        <JLink href={`/blogs/${id}`} newTab={false} noDecoration>
                            <Paper sx={{
                                padding: 2,
                                '&:hover': {
                                    cursor: 'pointer',
                                    elevation: 3
                                }
                            }}>
                                <CategoryLayer categories={categories} clickable={false} />
                                <JBox needsDivider>
                                    <Typography variant="h6">{title}</Typography>
                                </JBox>
                                <StyledTypography variant="body1">
                                    {content}
                                </StyledTypography>
                                <Typography variant="subtitle2" textAlign="right">
                                    {DateTime.fromISO(createdAt).setLocale('en').toLocaleString(DateTime.DATE_FULL)}
                                </Typography>
                            </Paper>
                        </JLink>
                    </Grid>
                ))
            }
        </>
    )
}