import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AddMachine } from "./AddMachine";
import { Button } from "@mui/material";
import { AddMaintenance } from "./AddMaintenance";
import { AddComplaints } from "./AddComplaints";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { useSelector } from "react-redux";

const DataInsertPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    

    React.useEffect(() => {
        if (!localStorage.getItem('Authenticated')) {
            navigate('/');
        }
    })
    return (
        <CustomContainer>
            {params.type === "machine" ? (
                <AddMachine />
            ) : params.type === "maintenance" ? (
                <AddMaintenance />
            ) : params.type === "complaints" ? (
                <AddComplaints />
            ) : (
                <></>
            )}
            <Button
                onClick={() => {
                    navigate('/');
                }}
            >
                Назад
            </Button>
        </CustomContainer>
    );
};

export { DataInsertPage };
