import React, { useState } from 'react';
import Logo from '../shared/Logo';
import { Box, Button, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import Input from '../shared/Input';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useMatch } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { IconBlock } from './IconBlock';



const AdminNavigation = () => {

    const NavlinkStyle = {
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '36px',
        textAlign: 'center',
        textWrap: 'nowrap',
        '&:hover': {
            color: 'primary.dark'
        },
        display: {
            sm: 'none',
            md: 'block'
        }
    }

    return (
        <List
            component={'nav'}
            sx={{
                display: 'flex',
            }}>
            <ListItem>
                <Link to={''}>
                    <Typography sx={NavlinkStyle}>
                        Результаты учеников
                    </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <Link to={''}>
                    <Typography sx={NavlinkStyle}>
                        Курсы
                    </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <Link to={''}>
                    <Typography sx={NavlinkStyle}>
                        Ученики
                    </Typography>
                </Link>
            </ListItem>
        </List >
    )
}


const Header = () => {

    const [isAuth, setAuth] = useState<boolean>(true);
    const [isAdmin, setAdmin] = useState<boolean>(true);

    const match = useMatch('/home');


    const [opened, setOpened] = useState<boolean>(false);

    let pages: string[] = [];

    if (isAdmin) {
        pages = ['Результаты учеников', 'Ученики', 'Курсы']

    }
    else {
        if (isAuth && !match) {
            pages = ['Мои курсы']
        }
    }

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpened(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {pages.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                {
                    isAdmin &&
                    <ListItem key={'asda4213'} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={'Зарегестрировать ученика'} />
                        </ListItemButton>
                    </ListItem>
                }
                <ListItem key={'asda'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: opened ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={isAuth ? 'Выйти' : 'Войти'} />
                    </ListItemButton>
                </ListItem>
                {
                    !isAdmin &&
                    <ListItem key={'asda132'} disablePadding sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '50%',
                        pl: 2,
                        mt: 2
                    }}>
                        <Link to='/'>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <TelegramIcon />
                            </ListItemIcon>
                        </Link>
                        <Link to='/'>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <WhatsAppIcon />
                            </ListItemIcon>
                        </Link>
                        <Link to='/'>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <InstagramIcon />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                }

            </List>
        </Box >
    );


    return (
        <Box sx={{
            width: '100%',
            height: {
                xs: '54px',
                md: '104px'
            },
            display: 'flex',
            flexDirection: {
                xs: 'row-reverse',
                md: 'row'
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#fff',
            borderBottom: '1px solid black',
            boxSizing: 'border-box',
            padding: {
                xs: '0 10px',
                md: '0 50px'
            }
        }}>
            {/* LOGO для ПК */}
            <Box sx={{
                height: '100%',
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Logo />
            </Box>
            {/* Меню для ПК */}
            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {
                    isAdmin && <AdminNavigation />
                }
                {
                    isAdmin && <Button variant="contained"
                        color="secondary"
                        sx={{
                            ml: 2,
                            fontSize: '16px',
                            lineHeight: '24px',
                            textWrap: 'nowrap'
                        }
                        }
                    >Зарегестрировать ученика</Button>
                }
                {
                    !isAdmin && <IconBlock />
                }
                {
                    !match && !isAdmin && <Button variant="contained"
                        color="secondary"
                        sx={{
                            height: '52px',
                            ml: 7,
                            fontSize: '16px'
                        }}
                    >
                        Мои курсы
                    </Button>
                }
                <Button variant="contained"
                    color="secondary"
                    sx={{
                        height: '52px',
                        ml: 3,
                        fontSize: '16px'
                    }}
                >
                    Выйти
                </Button>
            </Box>
            {/* LOGO для Мобилки */}
            <Box sx={{
                display: {
                    xs: 'flex',
                    md: 'none'
                },
                height: '100%',
                flexGrow: 10,
                justifyContent: 'center',
                alignItems: 'center',
                border: '1p solid blue'
            }}>
                <Logo />
            </Box>
            {/* Меню для Мобилки */}
            <Box sx={{
                display: {
                    xs: 'flex',
                    md: 'none'
                },
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={opened} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </Box>
        </Box >
    );
};

export default Header;