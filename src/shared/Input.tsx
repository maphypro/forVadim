import InputBase from '@mui/material/InputBase/InputBase';
import React from 'react';

type InputProps = {
    onChange: (event: any) => void,
    value: string
}

const Input = ({onChange, value}: InputProps) => {
    return (
        <InputBase
            placeholder='Введите пароль'
            sx={{
                border: '1px solid',
                borderColor: 'primary.light',
                color: 'primary.dark',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500',
                fontSize: '20px',
                padding: '8px 16px',
            }}
            fullWidth
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;