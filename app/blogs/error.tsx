'use client' // Error boundaries must be Client Components

import { Typography } from '@mui/material'

export default function Error() {
    return (
        <div>
            <h2>Something went wrong here 🥲🥲🥲</h2>
            <Typography variant='subtitle1'>
                Did you not passing any categories or page sizes to the backend ?
            </Typography>
        </div>
    )
}