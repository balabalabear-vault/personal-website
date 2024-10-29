'use client';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useDeferredValue, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

interface ISearchBar {
    fullWidth: boolean;
}

export default function SearchBar({
    fullWidth
}: Readonly<ISearchBar>) {
    const [text, setText] = useState<string>('');
    const deferredValue = useDeferredValue(text)

    const handeleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <TextField
            id="text-field"
            label="Outlined"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={deferredValue}
            onChange={handeleOnChange}
            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                },
            }}
            fullWidth={fullWidth}
        />
    )
}