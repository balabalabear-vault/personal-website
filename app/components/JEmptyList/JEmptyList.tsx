import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface IJEmptyList {
    text?: string,
}

export default async function JEmptyList({
    text = "No update is available yet."
}: Readonly<IJEmptyList>) {

    return (
        <Container>
            <Typography
                variant="subtitle2"
                mb={2}
                sx={{ textAlign: 'center' }}
            >
                {text}
            </Typography>
        </Container>
    )
}