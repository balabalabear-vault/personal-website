'use client' // Error boundaries must be Client Components

import { Typography } from '@mui/material'

export default function Error() {
    return (
        <div>
            <h2>Something went wrong with react-three/fiber 🥲🥲🥲</h2>
            <Typography variant='subtitle1'>
                Maybe come visit again next time.
            </Typography>
        </div>
    )
}