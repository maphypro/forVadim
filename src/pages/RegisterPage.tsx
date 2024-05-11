import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Input from '../shared/Input';
import Logo from '../shared/Logo';

const RegisterPage = () => {


    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        mb: 2,
    }

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [FIO, setFIO] = useState<string>('');


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

                    Создай аккаунт
                </Typography>
                <Box sx={style}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'center',
                        mb: 1,
                        '@media (max-width: 300px)': {
                            fontSize: '15px'
                        }
                    }}>
                        Введи логин для регистрации <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Input value={login} onChange={(event) => setLogin(event.target.value)}/>
                </Box>
                <Box sx={style}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'center',
                        mb: 1
                    }}>
                        Придумай пароль <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Input value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Box>
                <Box sx={style}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'center',
                        mb: 1
                    }}>
                        Подтверди пароль <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                </Box>
                <Box sx={style}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'center',
                        mb: 1
                    }}>
                        Введи ФИО ученика
                    </Typography>
                    <Input value={FIO} onChange={(event) => setFIO(event.target.value)}/>
                </Box>
                <Button sx={{
                    width: '100%',
                }} color="secondary" variant='contained'>Зарегестрировать</Button>
            </Box>
        </Box>
    );
};

export default RegisterPage;