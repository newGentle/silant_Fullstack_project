import * as React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../../Store/Slicers/UserInfoSlicer";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const userInfo = useSelector((state) => state.user);
    
    React.useEffect(() => {
        if (localStorage.getItem('accessToken') || userInfo.success){
            dispatch(UserData(localStorage.getItem('accessToken')));
        }
    }, [dispatch, userInfo.success]);

    
    return (
        <CustomContainer style={{ borderBottom: "1px solid var(--bg_color)" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                }}
            >
                <div>
                    <a href="/">
                        <img
                            src="http://127.0.0.1:8000/static/images/logo.png"
                            alt="Logo"
                            style={{ width: "300px" }}
                        />
                    </a>
                </div>
                <div>
                    <p>+7-8352-20-12-09, telegram</p>
                </div>
                {localStorage.getItem('Authenticated') ? (
                    
                    <div style={{display: "flex"}}>
                        <p style={{marginRight: "20px"}}> {!userInfo.loading && userInfo.success ? userInfo.data[0].first_name : 'Загрузка'} </p>
                            <ThemeProvider theme={theme}>
                                <Button
                                    onClick={() => {
                                        navigate("/logout");
                                    }}
                                >
                                    Выйти
                                </Button>
                            </ThemeProvider>
                        </div>
                    
                ) : (
                    <div>
                        <ThemeProvider theme={theme}>
                            <Button
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                Авторизация
                            </Button>
                        </ThemeProvider>
                    </div>
                )}
            </div>
        </CustomContainer>
    );
};

export { Header };
