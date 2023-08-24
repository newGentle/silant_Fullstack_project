import * as React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { Button, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../Theme/Theme';

const Header = () => {
    const navigate = useNavigate();


    return (
        <CustomContainer style={{borderBottom: '1px solid var(--bg_color)'}}>
            
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                    <div >
                        <a href="/"> 
                            <img src="http://127.0.0.1:8000/static/images/logo.png" alt="Logo" style={{width: '300px'}} />
                        </a>
                    </div>
                    <div >
                        <p>+7-8352-20-12-09, telegram</p>
                    </div>
                    <div >
                        <ThemeProvider theme={theme}>
                            <Button onClick={() => {navigate('/login')}}>Авторизация</Button>
                        </ThemeProvider>
                    </div>
                </div>
            
        </CustomContainer>
    )
}

export { Header }