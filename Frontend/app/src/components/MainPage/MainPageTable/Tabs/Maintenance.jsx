import { Button, Link, Table, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MaintenanceData } from "../../../../Store/Slicers/MaintenanceSlicer";
import { theme } from "../../../../Theme/Theme";
import { MaintenanceFilters } from "../Filters/MaintenanceFilters";

const Maintenance = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logged = useSelector((state) => state.user);

    const maintenance = useSelector((state) => state.maintenance);

    React.useEffect(() => {
        if (!maintenance.data) {
            if (logged.success || localStorage.getItem("accessToken")) {
                dispatch(MaintenanceData(localStorage.getItem("accessToken")));
            }
        }
    }, [dispatch, logged]);
    return (
        <>
            {logged.success ? (
                logged.data[0].role === "Менеджер" ||
                logged.data[0].role === "Клиент" ||
                logged.data[0].role === "Сервисная компания" ? (
                    <ThemeProvider theme={theme}>
                        <Button
                            style={{ marginBottom: "20px" }}
                            onClick={() => {
                                navigate("/datainsert/maintenance/");
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
            <MaintenanceFilters />

            <div style={{ overflowX: "scroll" }}>
                <Table>
                    <tbody>
                        <tr>
                            <th>№ п/п</th>
                            <th>Зав. № техники</th>
                            <th>Вид ТО</th>
                            <th>Дата проведения ТО</th>
                            <th>Наработка, м/час</th>
                            <th>№ заказ-наряда</th>
                            <th>дата заказ-наряда</th>
                            <th>Организация проводившая ТО</th>
                        </tr>
                        {maintenance.loading || !maintenance.success ? (
                            <tr>
                                <td>Загрузка</td>
                            </tr>
                        ) : (
                            maintenance.data.map((value, idx) => (
                                <tr key={value.id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        {value.machine.factoryNumberOfMachine}
                                    </td>
                                    <td>
                                        <Link
                                            href={`maintenance/${value.typeOfMaintenance.id}`}
                                        >
                                            {value.typeOfMaintenance.title}
                                        </Link>
                                    </td>
                                    <td>{value.dateOfMaintenance}</td>
                                    <td>{value.operatingTime}</td>
                                    <td>{value.numberOrderWork}</td>
                                    <td>{value.dateOrderWork}</td>
                                    <td>
                                        <Link
                                            href={`serviceCompany/${value.maintenanceServiceCompany.id}`}
                                        >
                                            {
                                                value.maintenanceServiceCompany
                                                    .first_name
                                            }
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

export { Maintenance };
