import * as React from "react";
import { Button, Link, Table, ThemeProvider } from "@mui/material";
import { ComplaintsFilters } from "../Filters/ComplaintsFilters";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../Theme/Theme";

const Complaints = (props) => {
    const { complaints, user } = props;
    const navigate = useNavigate();
    return (
        <>
            {user.success ? (
                user.data[0].role === "Менеджер" ||
                user.data[0].role === "Сервисная компания" ? (
                    <ThemeProvider theme={theme}>
                        <Button
                            style={{ marginBottom: "20px" }}
                            onClick={() => {
                                navigate("/datainsert/complaints/");
                            }}
                        >
                            Добавить новую запись
                        </Button>
                    </ThemeProvider>
                ) : (
                    <></>
                )
            ) : (
                <></>
            )}
            <ComplaintsFilters />

            <div style={{ overflowX: "scroll" }}>
                <Table>
                    <tbody>
                        <tr>
                            <th>№ п/п</th>
                            <th>Зав. № Техники</th>
                            <th>Дата отказа</th>
                            <th>Наработка, м/час</th>
                            <th>Узел отказа</th>
                            <th>Описание отказа</th>
                            <th>Способ восстановления</th>
                            <th>Используемые запасные части</th>
                            <th>Дата восстановления</th>
                            <th>Время простоя техники</th>
                            <th>Сервисная компания</th>
                        </tr>
                        {complaints.loading || !complaints.success ? (
                            <tr>
                                <td>Загрузка</td>
                            </tr>
                        ) : (
                            complaints.data.map((value, idx) => (
                                <tr key={value.id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        {value.machine.factoryNumberOfMachine}
                                    </td>
                                    <td>{value.dateOfFailure}</td>
                                    <td>{value.operatingTime}</td>
                                    <td>
                                        <Link
                                            href={`typeoffailure/${value.nodeOfFailure.id}`}
                                        >
                                            {value.nodeOfFailure.title}
                                        </Link>
                                    </td>
                                    <td>{value.descriptionOfFailure}</td>
                                    <td>
                                        <Link
                                            href={`recoverymethod/${value.recoveryMethod.id}`}
                                        >
                                            {value.recoveryMethod.title}
                                        </Link>
                                    </td>
                                    <td>{value.usedSpareParts}</td>
                                    <td>{value.dateOfRecovery}</td>
                                    <td>{value.downtimeOfMachine}</td>
                                    <td>{value.serviceCompany.first_name}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export { Complaints };
