import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface IJBox {
    children?: React.ReactNode
    needsDivider?: boolean
    isSectionComponent?: boolean
    style?: any,
}

export default function JBox(
    {
        children,
        style,
        needsDivider = false,
        isSectionComponent = false,
    }: Readonly<IJBox>,
) {
    return (
        <>
            <Box
                sx={{
                    mb: {
                        xs: isSectionComponent ? 1 : 0,
                        md: isSectionComponent ? 2 : 0,
                    },
                    ...style
                }}
            >
                {children}
            </Box>
            {
                needsDivider
                && (
                    <Divider sx={{
                        mb: {
                            xs: isSectionComponent ? 1 : 0,
                            md: isSectionComponent ? 2 : 0,
                        },
                    }} />
                )
            }
        </>
    )
}