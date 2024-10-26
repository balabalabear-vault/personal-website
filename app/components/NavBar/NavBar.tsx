'use client';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, AppBar, Box, Button, Container, Drawer, IconButton, MenuItem, Slide, Stack, styled, Toolbar, useScrollTrigger } from "@mui/material";
import { useMemo, useState } from "react";
import JBox from "../JBox/JBox";
import JLink from "../JLink/JLink";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: '8px 12px',
}));

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const trigger = useScrollTrigger();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const tabs = useMemo(() => ({
        ABOUT_ME: {
            text: 'HOME',
            href: '/',
        },
        PROJECTS: {
            text: 'PROJECT',
            href: '/projects',
        },
        TRAVEL: {
            text: 'TRAVEL',
            href: '/travels',
        },
        BLOG: {
            text: 'BLOG',
            href: '/blogs',
        }
    }), []);

    const hyperLinks = useMemo(() => ({
        GITHUB: {
            icon: <GitHubIcon />,
            link: 'https://github.com/kuenyuikwok1106',
            testId: 'github'
        },
        LINKEDIN: {
            icon: <LinkedInIcon />,
            link: 'https://www.linkedin.com/in/yui-kuen-kwok/',
            testId: 'linkedIn'
        }
    }), [])

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar
                position="fixed"
                sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 1 }}
            >
                <Container maxWidth="lg">
                    <StyledToolbar variant="dense" disableGutters>
                        <Box sx={{ display: { xs: 'none', md: 'flex', }, flexGrow: 1, alignItems: 'center' }}>
                            <Stack direction="row" flexGrow={1}>
                                {
                                    Object.values(tabs).map((tab) => (
                                        <Button key={tab.text} variant="text" color="info" size="small" href={tab.href}>
                                            {tab.text}
                                        </Button>

                                    ))
                                }
                            </Stack>
                            <Stack direction="row" gap={1}>
                                {
                                    Object.values(hyperLinks).map((resource) => (
                                        <IconButton key={resource.testId} href={resource.link} data-testid={resource.testId}>
                                            {resource.icon}
                                        </IconButton>
                                    ))
                                }
                            </Stack>
                        </Box>
                        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
                            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                    <JBox
                                        needsDivider
                                        isSectionComponent
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            px: 2,
                                        }}
                                    >
                                        <IconButton onClick={toggleDrawer(false)}>
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </JBox>
                                    {
                                        Object.values(tabs).map((tab) => (
                                            <JLink key={tab.text} href={tab.href} newTab={false} noDecoration>
                                                <MenuItem onClick={toggleDrawer(false)}>
                                                    {tab.text}
                                                </MenuItem>
                                            </JLink>
                                        ))
                                    }
                                </Box>
                            </Drawer>
                        </Box>
                    </StyledToolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}