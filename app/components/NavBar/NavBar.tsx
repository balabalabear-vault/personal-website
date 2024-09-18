'use client';

import { useMemo, useState } from "react";
import { AppBar, Container, Box, Button, IconButton, Drawer, Divider, MenuItem, alpha, styled, Toolbar, Slide, useScrollTrigger } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from "next/link";


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
            text: 'ABOUT ME',
            href: '/',
        },
        PROJECTS: {
            text: 'PROJECTS',
            href: '/project',
        },
        TRAVEL: {
            text: 'TRAVEL',
            href: '/travel',
        },
        BLOG: {
            text: 'BLOG',
            href: '/blog',
        }
    }), []);

    const hyperLinks = useMemo(() => ({
        GITHUB: {
            icon: <GitHubIcon />,
            link: 'https://github.com/kuenyuikwok1106'
        },
        LINKEDIN: {
            icon: <LinkedInIcon />,
            link: 'https://www.linkedin.com/in/yui-kuen-kwok/'
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
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                            {/* <Sitemark /> */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {
                                    Object.values(tabs).map((tab) => (
                                        <Button key={tab.text} variant="text" color="info" size="small">
                                            <Link href={tab.href}> {tab.text} </Link>
                                        </Button>
                                    ))
                                }
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 1,
                                alignItems: 'center',
                            }}
                        >
                            {
                                Object.values(hyperLinks).map((resource) => (
                                    <Link key={resource.link} target="_blank" href={resource.link}> {resource.icon} </Link>
                                ))
                            }
                        </Box>
                        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
                            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <IconButton onClick={toggleDrawer(false)}>
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </Box>
                                    <Divider sx={{ my: 3 }} />
                                    {
                                        Object.values(tabs).map((tab) => (
                                            <MenuItem key={tab.text}>
                                                {tab.text}
                                            </MenuItem>
                                        ))

                                    }
                                    <MenuItem>
                                        <Button color="primary" variant="contained" fullWidth>
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button color="primary" variant="outlined" fullWidth>
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </StyledToolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}