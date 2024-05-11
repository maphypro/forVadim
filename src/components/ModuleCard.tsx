import { Box, Card, Typography } from '@mui/material';
import { title } from 'process';
import React, { useRef, useState } from 'react';


type ModuleCardType = {
    name: string,
    description: string,
    lessonsCount: number,
    testsCount: number
}

const ModuleCard = ({ name, description, lessonsCount, testsCount }: ModuleCardType) => {

    let [isHover, setHover] = useState(false);


    return (

        <Card
            sx={{
                mb: 2,
                px: 3,
                py: 2,
                backgroundColor: '#F2F2F2',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
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
            }}
            onMouseEnter={() => { setHover(true)  }}
            onMouseLeave={() => { setHover(false)  }}
        >
            <Box>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: {
                        xs: '14px',
                        sm: '16px',
                        md: '24px'
                    },
                    fontWeight: '400',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    {name}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: {
                        xs: '14px',
                        sm: '15px',
                        md: '18px'
                    },
                    fontWeight: '400',
                    textAlign: 'left',
                    color: '#7B7B7B',

                }}>
                    {description}
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex'
            }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: {
                        xs: '10px',
                        sm: '12px',
                        md: '12px'
                    },
                    fontWeight: '500',
                    lineHeight: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    mr: 1,
                    color: isHover ? '#2e2e2e' : '#7B7B7B',

                }}>
                    {`${lessonsCount} темы`}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: {
                        xs: '10px',
                        sm: '12px',
                        md: '12px'
                    },
                    fontWeight: '500',
                    lineHeight: '20px',
                    textAlign: 'left',
                    color: isHover ? '#2e2e2e' : '#7B7B7B',
                }}>
                    {`${testsCount} тест`}
                </Typography>
            </Box>
        </Card>
    );
};

export default ModuleCard;