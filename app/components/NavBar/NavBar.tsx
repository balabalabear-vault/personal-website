'use client';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, AppBar, Box, Button, Container, Drawer, IconButton, MenuItem, Slide, styled, Toolbar, useScrollTrigger } from "@mui/material";
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
            text: 'Home Page',
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
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {
                                    Object.values(tabs).map((tab) => (
                                        <JLink key={tab.text} href={tab.href} newTab={false} noDecoration>
                                            <Button variant="text" color="info" size="small">
                                                {tab.text}
                                            </Button>
                                        </JLink>

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
                                    <JLink key={resource.link} href={resource.link} newTab noDecoration>
                                        <IconButton>
                                            {resource.icon}
                                        </IconButton>
                                    </JLink>
                                ))
                            }
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