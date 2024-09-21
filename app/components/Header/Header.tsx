import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

import SearchBar from "../SearchBar/SearchBar";
import JBox from "../JBox/JBox";

interface IHeader {
    title: string;
    subtitle: string;
}

export default function Header({
    title,
    subtitle
}: Readonly<IHeader>) {
    return (
        <JBox needsDivider isSectionComponent>
            <Typography variant="h3">{title}</Typography>
            <Grid container spacing={2} alignItems="center" my={1}>
                <Grid size={{ xs: 12, sm: 8 }}>
                    <Typography variant="subtitle1">{subtitle}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <SearchBar fullWidth />
                </Grid>
            </Grid>
        </JBox>
    )
}