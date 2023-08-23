import * as React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { Button, createTheme, darken, lighten, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const theme = createTheme({
        components: {
            
            MuiButton: {
                styleOverrides: {
                    root: {
                        
                            backgroundColor: "var(--main_color)",
                            fontFamily: "Astra, Inter, sans",
                            textTransform: "none",
                            borderRadius: "15px",
                            padding: "5px 25px",
                            color: "var(--bg_color)",
                            boxShadow: "7px 7px 5px -5px rgba(34, 60, 80, 0.6)",

                            "&:hover": {
                                backgroundColor: darken('#163E6C', 0.2),
                            }
                        
                    }
                },
            }
        }
    })

    return (
        <CustomContainer>
            
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0'}}>
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