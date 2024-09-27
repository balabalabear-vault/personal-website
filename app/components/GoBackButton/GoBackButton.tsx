'use client';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useRouter } from 'next/navigation'


export default function GoBackButton() {
    const router = useRouter()

    return (
        <Typography
            alignSelf="flex-start"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => router.back()}      
            sx={{
                '&:hover': {
                    cursor: 'pointer'
                }
            }} 
        >
            <IconButton>
                <KeyboardDoubleArrowLeftIcon />
            </IconButton>
            Go Back
        </Typography>
    )
}