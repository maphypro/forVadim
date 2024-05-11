import { Link } from "react-router-dom"
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from "@mui/material";

export const IconBlock = () => {
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Link to='/'>
                <TelegramIcon sx={{ ml: 0, width: '40px', height: '30px', color: 'primary.dark' }} />
            </Link>
            <Link to='/'>
                <WhatsAppIcon sx={{ ml: 2, width: '40px', height: '30px', color: 'primary.dark' }} />
            </Link>
            <Link to='/'>
                <InstagramIcon sx={{ ml: 2, width: '40px', height: '30px', color: 'primary.dark' }} />
            </Link>

        </Box>
    )
}