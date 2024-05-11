import { Box, Typography } from '@mui/material';
import React from 'react';

type StepCardProps = {
    id: number,
    name: string,
    completed: boolean
}

const StepCard = ({ id, name, completed }: StepCardProps) => {
    return (
        <Box sx={{
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pl: 2,
            pr: '5px',
            borderRadius: '5px',
            transition: 'background-color 0.6s',
            '&:hover': {
                backgroundColor: '#ecf4ff',
                transition: 'background-color 0.2s',
            }
        }}>
            <Typography sx={{
                fontSize: '18px',
                lineHeight: '30px',
                fontWeight: '500',
                color: '#7d7d7d'
            }}>
                {name}
            </Typography>
            <Box sx={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                border: '1px solid #c5c5c5',
                backgroundColor: completed ? '#009700' : 'transparent'
            }}>

            </Box>
        </Box>
    );
};

export default StepCard;