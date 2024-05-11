import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Step, TestStep, TextStep, VideoStep } from '../types/Course.types';
import { Link, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Header from '../components/Header';
import Breadcrumb from '../components/Broadcrumb';


const StepPage = () => {

    const { lesson_id, step_id } = useParams()

    const stepsList: (TextStep | VideoStep | TestStep)[] = [
        {
            id: 1,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Подготовка',
            type: 'video',
            content: { url: 'keklol' }
        },
        {
            id: 2,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Материалы',
            type: 'text',
            content: { text: 'keklol' }
        },
        {
            id: 3,
            lessonId: 1,
            sequenceNumber: 1,
            name: 'Метод коррекции',
            type: 'text',
            content: { text: 'keklol' }
        },
    ];

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
        }}>
            <Header />
            <Breadcrumb />

            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
            }}>
                <Box sx={{
                    width: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: '1px solid black'
                }}>
                    <Box sx={{
                        borderBottom: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'start'
                    }}>
                        <Box sx={{
                            my: 2,
                            pl: 5
                        }}>
                            <Button variant='contained' sx={{
                                height: '35px',
                                maxWidth: '140px',
                                fontSize: '15px',
                                lineHeight: '35px',
                                borderRadius: '60px',
                                textWrap: 'nowrap',
                                backgroundColor: '#dbdbdb',
                                color: 'black',
                            }}>
                                <KeyboardBackspaceIcon /> все занятия
                            </Button>
                            <Typography sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                mt: 1
                            }}>
                                Коррекция
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                    }}>
                        {
                            stepsList.map(step => {
                                return (
                                    <Link to={`${step_id}/../../${step.id}`}>
                                        <Box sx={{
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: '#f8f4f4'
                                            }
                                        }}>
                                            <Typography sx={{
                                                fontSize: '18px',
                                                lineHeight: '50px',
                                                pl: 5

                                            }}>
                                                {step.name}
                                            </Typography>
                                        </Box>
                                    </Link>

                                )
                            })
                        }
                    </Box>
                </Box>
                <Box sx={{
                    width: '75%',
                }}>

                </Box>
            </Box>

        </Box>
    );
};

export default StepPage;