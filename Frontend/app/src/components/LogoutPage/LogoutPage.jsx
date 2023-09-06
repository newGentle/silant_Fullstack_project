import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Slicers/AuthSlicer";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    React.useEffect(() => {
        if (user.success === false) {
            navigate('/');
        }
    }, [navigate, user])
    return (
        <CustomContainer>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h3>Вы Уверены, что хотите выйти ?</h3>
                <ThemeProvider theme={theme}>
                    <Button
                        onClick={() => {
                            dispatch(logout());
                            navigate('/')
                        }}
                    >
                        Выйти
                    </Button>
                </ThemeProvider>
            </div>
        </CustomContainer>
    );
}

export { LogoutPage };
