import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../shared/Logo';
import Input from '../shared/Input';

const AuthPage = () => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        mb: 2,
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '100%',
                height: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pl: 3
                }}>
                    <Logo />
                </Box>
            </Box>
            <Box sx={{
                width: {
                    xs: '300px',
                    sm: '380px'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 300px)': {
                    width: '240px'
                }
            }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '36px',
                    letterSpacing: '-0.01em',
                    textAlign: 'center',
                    mb: 1,

                }}>

                    Войти в аккаунт
                </Typography>
                <Box sx={style}>
                    <Input value={login} onChange={(event) => setLogin(event.target.value)}/>
                </Box>
                <Box sx={style}>
                    <Input value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Box>

                <Button sx={{
                    width: '100%',
                    backgroundColor: 'primary.light',
                    color: 'black',
                    '&:hover': {
                        color: 'primary.light'
                    }
                }} variant='contained'>Войти</Button>
            </Box>
        </Box>
    );
};

export default AuthPage;