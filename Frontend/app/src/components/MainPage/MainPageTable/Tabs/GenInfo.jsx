import * as React from "react";
import { Button, Link, Table, ThemeProvider } from "@mui/material";
import { GenInfoFilters } from "../Filters/GenInfoFilters";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { MachineData } from "../../../../Store/Slicers/MachineSlicer";

const GenInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logged = useSelector((state) => state.user);
    const machine = useSelector((state) => state.machine);

    React.useEffect(() => {
        if (!machine.data) {
            if (logged.success || localStorage.getItem("accessToken")) {
                dispatch(MachineData(localStorage.getItem("accessToken")));
            }
        }
    }, [dispatch, logged]);

    if (logged.loading && !logged.success) {
        return "loading";
    }
    return (
        <>
            {logged.success && logged.data[0].role === "Менеджер" ? (
                <ThemeProvider theme={theme}>
                    <Button
                        style={{ marginBottom: "20px" }}
                        onClick={() => {
                            navigate("/datainsert/machine/");
                        }}
                    >
                        Добавить новую запись
                    </Button>
                </ThemeProvider>
            ) : (
                <></>
            )}

            <GenInfoFilters />
            <div style={{ overflowX: "scroll" }}>
                <Table>
                    <tbody>
                        <tr>
                            <th colSpan="17">ОБЩИЕ СВЕДЕНИЯ</th>
                        </tr>

                        <tr>
                            <th>№</th>
                            <th>Модель техники</th>
                            <th>Зав. № машины</th>
                            <th>Модель двигателя </th>
                            <th>Зав. № двигателя</th>
                            <th>Модель трансмиссии (производитель, артикул)</th>
                            <th>Зав. № трансмиссии</th>
                            <th>Модель ведущего моста </th>
                            <th>Зав. № ведущего моста</th>
                            <th>Модель управляемого моста </th>
                            <th>Зав. № управляемого моста</th>
                            <th>Дата отгрузки с завода</th>
                            <th>Покупатель</th>
                            <th>Грузополучатель (конечный потребитель)</th>
                            <th>Адрес поставки (эксплутация)</th>
                            <th>Комплектация (доп. опции)</th>
                            <th>Сервисная компания</th>
                        </tr>
                        {machine.loading || !machine.success ? (
                            <tr>
                                <td>Загрузка</td>
                            </tr>
                        ) : (
                            machine.data.map((value, idx) => (
                                <tr key={value.factoryNumberOfMachine}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <Link
                                            href={`machine/${value.factoryNumberOfMachine}`}
                                        >
                                            {value.modelOfMachine.title}
                                        </Link>
                                    </td>
                                    <td>{value.factoryNumberOfMachine}</td>

                                    <td>
                                        <Link
                                            href={`engine/${value.modelOfEngine.id}`}
                                        >
                                            {value.modelOfEngine.title}
                                        </Link>
                                    </td>
                                    <td>{value.factoryNumberOfEngine}</td>
                                    <td>
                                        <Link
                                            href={`transmission/${value.modelOfTransmission.id}`}
                                        >
                                            {value.modelOfTransmission.title}
                                        </Link>
                                    </td>
                                    <td>{value.factoryNumberOfTransmission}</td>
                                    <td>
                                        <Link
                                            href={`mainaxle/${value.modelOfMainAxle.id}`}
                                        >
                                            {value.modelOfMainAxle.title}
                                        </Link>
                                    </td>
                                    <td>{value.factoryNumberOfMainAxle}</td>
                                    <td>
                                        <Link
                                            href={`steeringaxle/${value.modelOfSteeringAxle.id}`}
                                        >
                                            {value.modelOfSteeringAxle.title}
                                        </Link>
                                    </td>
                                    <td>{value.factoryNumberOfSteeringAxle}</td>
                                    <td>{value.dateOfShipment}</td>
                                    <td>
                                        <Link
                                            href={`client/${value.client.id}`}
                                        >
                                            {value.client.first_name}
                                        </Link>
                                    </td>
                                    <td>{value.consumer}</td>

                                    <td>{value.operationAddress}</td>
                                    <td style={{ textAlign: "left" }}>
                                        {value.additionalOptions
                                            .split(";")
                                            .map((item, i) => {
                                                return (
                                                    <div key={i}>{item}</div>
                                                );
                                            })}
                                    </td>
                                    <td>
                                        <Link
                                            href={`serviceCompany/${value.serviceCompany.id}`}
                                        >
                                            {value.serviceCompany.first_name}
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export { GenInfo };
