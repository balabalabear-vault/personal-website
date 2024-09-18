'use client';
import { Stack, Chip } from "@mui/material";
import { useState } from "react";

interface ICategoryLayer {
    categories: string[],
    clickable: boolean
}

export default function CategoryLayer({
    categories,
    clickable,
}: Readonly<ICategoryLayer>) {
    const [selected, setSelected] = useState<{[key: string]: boolean}>({})

    const handleOnClick = (category: string) => {
        if(!clickable) return;
        if(selected[category]) setSelected((prev) => ({
            ...prev,
            [category]: false
        }))
        else setSelected((prev) => ({
            ...prev,
            [category]: true
        }))
    }

    return (
        <Stack direction="row" spacing={2} mb={2}>
            {
                categories.map((cat) => (
                    <Chip
                        key={cat}
                        label={cat}
                        color={selected[cat] ? "primary" : 'default'}
                        variant={selected[cat] ? "filled" : 'outlined'}
                        onClick={() => handleOnClick(cat)}
                        sx={{
                            '&:hover': {
                                cursor: clickable ? 'pointer' : 'default'
                            }
                        }}
                    />
                ))
            }
        </Stack>
    )
}