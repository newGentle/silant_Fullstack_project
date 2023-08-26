import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Button, Input, Table, ThemeProvider } from "@mui/material";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { MachineData } from "../../Store/Slicers/MachineSlicer";

function Unauthorized() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.machine);

    const submit = () => {
        const machine = document.getElementById('factoryNumberOfMachine').value
        dispatch(MachineData(machine));
    };

    console.log(data);

    return (
        <CustomContainer>
            <Input type="text" placeholder="Зав. № техники" id="factoryNumberOfMachine" />
            <ThemeProvider theme={theme}>
                    <Button
                        style={{ marginTop: "10px" }}
                        onClick={() => {
                            submit();
                        }}
                    >
                        Искать
                    </Button>
                </ThemeProvider>
            
            <div style={{ overflowX: "scroll" }}>
                <Table>
                    <tbody>
                        <tr>
                            <th colSpan="10">ОБЩИЕ СВЕДЕНИЯ</th>
                        </tr>
                        <tr>
                            <th>Модель техники</th>
                            <th>Зав. № машины</th>
                            <th>Модель двигателя</th>
                            <th>Зав. № двигателя</th>
                            <th>Модель трансмиссии (производитель, артикул)</th>
                            <th>Зав. № трансмиссии</th>
                            <th>Модель ведущего моста</th>
                            <th>Зав. № ведущего моста</th>
                            <th>Модель управляемого моста</th>
                            <th>Зав. № управляемого моста</th>
                        </tr>
                        <tr id="machineInfo">
                            <td>{data.status === 'BAD' ? data.error : 'OK'}</td>
                            
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CustomContainer>
    );
}

export { Unauthorized };
