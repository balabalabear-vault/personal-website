'use client';
import { Stack, Chip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface ICategoryLayer {
    categories: string[],
    tightSpacing?: boolean
    clickable?: boolean
    selected?: string[],
    onChange?: Dispatch<SetStateAction<string[]>>,
}

export default function CategoryLayer({
    categories,
    selected,
    onChange,
    clickable = false,
    tightSpacing = false,
}: Readonly<ICategoryLayer>) {

    const handleOnClick = (category: string) => {
        if (!clickable || !selected || !onChange) return;
        if (selected.includes(category)) {
            if(selected.length === 1) return;
            onChange((prev) => prev.filter((v) => v !== category));
        }
        else onChange((prev) => [...prev, category])
    }

    return (
        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={tightSpacing ? 1 : { xs: 1, md: 2 }} mb={2}>
            {
                categories.map((cat) => (
                    <Chip
                        key={cat}
                        label={cat}
                        color={selected && selected.includes(cat) ? "primary" : 'default'}
                        variant={selected && selected.includes(cat) ? "filled" : 'outlined'}
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