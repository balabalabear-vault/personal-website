'use client';

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import CategoryLayer from "../components/CategoryLayer/CategoryLayer";
import JLoading from "../components/JLoading/JLoading";
import usePagingBlogs from "../swr/usePagingBlogs";
import Lists from "./cardLayout/Lists";

type TContent = {
    categories: string[],
    clickable: boolean,
}

export default function Content({
    categories,
    clickable,
}: Readonly<TContent>) {
    const DEFAULT_PAGE = 1;
    const [selected, setSelected] = useState<string[]>(categories);

    const pageSizeOptions = useMemo(() => ([2, 4, 6].map(v => ({
        val: v,
        displayVal: v
    }))), []);
    const [pageSize, setPageSize] = useState<string>(pageSizeOptions[0].val.toString());
    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
    const handleChange = (event: SelectChangeEvent) => {
        setPageSize(event.target.value);
        setCurrentPage(DEFAULT_PAGE);
    }

    const {
        data,
        isLoading,
        isError,
        size,
        setSize
    } = usePagingBlogs(parseInt(pageSize), selected);

    const pageCount = useMemo(() => {
        if (!data) return 0;
        return Math.ceil(data[0].length / parseInt(pageSize));
    }, [data, pageSize])

    if (isLoading) return <JLoading />
    if (isError || !data) {
        throw Error();
    }

    return (
        <Stack direction="column" sx={{ height: '100%' }}>
            <CategoryLayer
                categories={categories}
                clickable={clickable}
                selected={selected}
                onChange={setSelected}
            />
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="h4">Latest</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                    <InputLabel id="page-size-select-label">Page Size</InputLabel>
                    <Select
                        labelId="page-size-select-label"
                        id="page-size-select"
                        value={pageSize.toString()}
                        onChange={handleChange}
                        autoWidth
                    >
                        {
                            pageSizeOptions.map((option) => (
                                <MenuItem key={option.val} value={option.val.toString()}>{option.displayVal}</MenuItem>
                            ))
                        }
                    </Select>
                </Box>
            </Stack>
            <Lists blogs={data[currentPage - 1]?.data || []} />
            <Stack justifyContent="center" alignItems="center" justifySelf="flex-end">
                <Pagination
                    count={pageCount}
                    variant="outlined"
                    onChange={(e: React.ChangeEvent<unknown>, v: number) => {
                        setCurrentPage(v);
                        setSize(size + 1)
                    }}
                />
            </Stack>
        </Stack>
    )
}