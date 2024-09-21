'use client';
import { Stack, Chip } from "@mui/material";
import { useState } from "react";

interface ICategoryLayer {
    categories: string[],
    clickable?: boolean
    tightSpacing?: boolean
}

export default function CategoryLayer({
    categories,
    clickable = false,
    tightSpacing = false,
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
        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={tightSpacing ? 1 : { xs: 1, md: 2 }} mb={2}>
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