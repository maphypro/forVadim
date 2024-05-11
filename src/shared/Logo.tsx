import { Typography } from '@mui/material';
import React from 'react';

const Logo = () => {
    return (
        <Typography sx={{
            fontSize: {
                xs: '16px',
                md: '20px',
            },
            fontWeight: '500',
            lineHeight: '30px',
            letterSpacing: '-0.01em',
            textAlign: 'left',
        }}>
            SHEPELEVA SCHOOL
        </Typography>
    );
};

export default Logo;