import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { IconBlock } from './IconBlock';

const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#1d1d1d',
            color: 'white'
        }}>
            <Box sx={{
                display: 'flex',
                width: {
                    xs: '100%',
                    sm: '80%'
                },
                pl: {
                    xs: '15px',
                    md: 0
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                },
                alignItems: {
                    xs: 'flex-start'
                },
                mt: '14px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '323px',
                    alignItems: {
                        xs: 'flex-start',
                        sm: 'flex-start'
                    }
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                        textAlign: 'left',
                        mb: '14px',
                    }}>
                        Контакты
                    </Typography>
                    <Box sx={{
                        mb: '14px',
                        ml: '-8px'
                    }}>
                        <IconBlock />
                    </Box>
                    <Box sx={{
                        width: '140px',
                        height: '140px',
                        mb: {
                            xs: '20px',
                            sm: '35px'
                        }
                    }}>
                        <img src={"https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"} alt="QR" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            
                        }} />
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: {
                                xs: '4vw',
                                sm: '20px'
                            },
                            fontWeight: '400',
                            lineHeight: '30px',
                            textAlign: {
                                xs: 'left',
                                sm: 'left'
                            },
                            mt: {
                                md: -2
                            }
                        }}>
                        Наведи камеру и подписывайся на меня в Instagram!
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ml: {
                        xs: 0,
                        sm: 10
                    },
                    mt: {
                        xs: 4,
                        sm: 0
                    },
                    alignItems: {
                        xs: 'flex-start',
                        sm: 'flex-start'
                    }
                }}>

                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                        textAlign: 'left',
                        mb: '14px'
                    }}>
                        АДРЕС SHEPELEVA STUDIO
                    </Typography>
                    <Box sx={{
                        mb: {
                            xs: 0,
                            sm: 2
                        }
                    }}>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.6622786279863!2d82.91159117639248!3d55.03161084730818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5cdf223dc3d%3A0xde34415993c1c2e5!2sUlitsa%20Vokzal&#39;naya%20Magistral&#39;%2C%2016%2C%20Novosibirsk%2C%20Novosibirskaya%20oblast&#39;%2C%20630099!5e0!3m2!1sen!2sru!4v1712056147074!5m2!1sen!2sru"
                            width="270"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: {
                                xs: '4vw',
                                sm: '20px'
                            },
                            fontWeight: '400',
                            lineHeight: '30px',
                            textAlign: {
                                xs: 'left',
                                sm: 'left'
                            },
                        }}>
                        г. Новосибирск,
                        ул. Вокзальная магистраль 16
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default Footer;