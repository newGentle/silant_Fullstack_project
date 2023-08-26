import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Button, Input, Table, ThemeProvider } from "@mui/material";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { MachineData } from "../../Store/Slicers/MachineSlicer";

function Unauthorized() {
    let status = true;
    let message = '';
    const dispatch = useDispatch();
    const data = useSelector((state) => state.machine);
    // const {status, error, success} = useSelector((state) => state.machine);

    const submit = () => {
        const machine = document.getElementById("factoryNumberOfMachine").value;
        dispatch(MachineData(machine));
    };

    if (data.data === null) {
        status = false;
    }
    
    if (data.status === 'BAD') {
        status = false;
        message = 'Техника с таким заводским номером отсутствует'
    }
    
    return (
        <CustomContainer>
            <h1 style={{ textAlign: "center" }}>
                Проверьте комплектацию и технические характеристики техники
                Силант
            </h1>
            <hr />
            <div style={{ margin: "30px 0" }}>
                <Input
                    type="text"
                    placeholder="Зав. № техники"
                    id="factoryNumberOfMachine"
                />
                <ThemeProvider theme={theme}>
                    <Button
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                            submit();
                        }}
                    >
                        Искать
                    </Button>
                </ThemeProvider>
            </div>
            <h3 style={{ textAlign: "center" }}>
                Информация о комплектации и технических характеристиках Вашей
                техники
            </h3>
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
                        {!status ? (
                            <tr>
                                <td colSpan={10}>
                                    {message}
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td>{data.data.modelOfMachine.title}</td>
                                <td>{data.data.factoryNumberOfMachine}</td>
                                <td>{data.data.modelOfEngine.title}</td>
                                <td>{data.data.factoryNumberOfEngine}</td>
                                <td>{data.data.modelOfTransmission.title}</td>
                                <td>{data.data.factoryNumberOfTransmission}</td>
                                <td>{data.data.modelOfMainAxle.title}</td>
                                <td>{data.data.factoryNumberOfMainAxle}</td>
                                <td>{data.data.modelOfSteeringAxle.title}</td>
                                <td>{data.data.factoryNumberOfSteeringAxle}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </CustomContainer>
    );
}

export { Unauthorized };
