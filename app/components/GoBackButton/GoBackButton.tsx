'use client';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useRouter } from 'next/navigation'

interface IGoBackButton {
    center?: boolean
}

export default function GoBackButton({
    center = false
}: Readonly<
    IGoBackButton
>) {
    const router = useRouter()

    return (
        <Typography
            alignSelf="flex-start"
            textAlign="center"
            display="flex"
            justifyContent={ center ? "center" : 'flex-start' }
            alignItems="center"
            onClick={() => router.back()}
            sx={{
                '&:hover': {
                    cursor: 'pointer'
                }
            }}
            variant="subtitle2"
        >
            <IconButton>
                <KeyboardDoubleArrowLeftIcon />
            </IconButton>
            Go Back
        </Typography>
    )
}