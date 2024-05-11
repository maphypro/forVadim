import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type CourseCardProps = {
    id: number,
    image: string,
    title: string,
    description: string
}


const CourseCard = ({ id, image, title, description }: CourseCardProps) => {

    return (

        <Card sx={{
            minWidth: '348px',
            mb: 2,
            backgroundColor: '#F2F2F2',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '25px',
            flexGrow: '10',
            boxSizing: 'border-box',
            '&:hover': {
                boxShadow: '2px 3px 2px #aaaaaa',
                cursor: 'pointer'
            },
            '&:last-child': {
                mb: 3
            }
        }}>
            <Link to={`../course/${id}`} style={{display: 'flex', padding: '24px', width: '100%'}}>
                <Box sx={{
                    minWidth: '66px',
                    width: '66px',
                    height: '66px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mr: 2,
                }}>
                    <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="kekw" />
                </Box>

                <Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: {
                            sm: '3vw',
                            md: '24px'
                        },
                        fontWeight: '500',
                        lineHeight: '36px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textAlign: 'left',

                    }}>
                        {description}
                    </Typography>
                </Box>
            </Link>

        </Card>

    );
};

export default CourseCard;