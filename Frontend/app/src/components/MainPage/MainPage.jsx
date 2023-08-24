import * as React from "react";
import "./MainPageTable.css";
import { Unauthorized } from "./Unauthorized";
import { Authorized } from "./Authorized";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch();
    const logged = useSelector((state) => state.login);

    return (
        <>
            {logged.is_Auth ? (
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
