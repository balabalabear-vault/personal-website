import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Blogs",
};

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <Box>
            <Header title="Blog" subtitle="My instagram." />
            {children}
        </Box>
    );
  }