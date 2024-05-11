import { Box, Typography } from '@mui/material';
import React from 'react';
import CourseList from '../components/CourseList';

const HomePage = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center', 
        }}>
            <Box sx={{
                width: {
                    sm: '100%',
                    md: '80%'
                },
                padding: {
                    xs: '10px',
                    md: 0
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '100%'
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '34px',
                        fontWeight: '300',
                        lineHeight: '40px',
                        textAlign: 'center',
                        color: 'primary.main',
                        mt: 2,
                        mb: 4
                    }}>
                        Мои курсы
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                    <CourseList />
                </Box>
            </Box>

        </Box >
    );
};

export default HomePage;