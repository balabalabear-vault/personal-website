import Container from '@mui/material/Container'
import Models from './Models';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: "Travels",
};

export default function Page() {
    return (
        <Container data-tag="hi" maxWidth="xl" disableGutters sx={{
            height: '80vh',
            p: 0,
            m: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            "&.MuiContainer-root": {
                margin: 0
            }
        }} >
            <Models />

        </Container>
    );
}

