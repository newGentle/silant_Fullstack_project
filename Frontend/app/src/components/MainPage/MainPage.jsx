import * as React from "react";
import "./MainPageTable.css";
import { Unauthorized } from "./Unauthorized";
import { Authorized } from "./Authorized";
import { useSelector } from "react-redux";

const MainPage = () => {
    const logged = useSelector((state) => state.login);
    
    return (
        <>
            {logged.is_Auth || localStorage.getItem('accessToken') ? (
                <>
                    <Authorized />
                </>
            ) : (
                <>
                    <Unauthorized />
                </>
            )}
        </>
    );
};

export { MainPage };
