import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../../Theme/Theme";

function LogoutPage() {
    return (
        <CustomContainer>
            <div style={{ textAlign: "center", marginTop: '50px' }}>
                <h3>Вы Уверены, что хотите выйти ?</h3>
                <ThemeProvider theme={theme}>
                    <Button>Выйти</Button>
                </ThemeProvider>
            </div>
        </CustomContainer>
    );
}

export { LogoutPage };
