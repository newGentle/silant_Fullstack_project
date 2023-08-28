import { Table } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaintenanceData } from "../../../Store/Slicers/MaintenanceSlicer";
const Maintenance = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.maintenance);
    const logged = useSelector((state) => state.user);

    React.useEffect(() => {
        if (logged.success || localStorage.getItem("accessToken")) {
            dispatch(MaintenanceData(localStorage.getItem("accessToken")));
        }
    }, [dispatch, logged]);

    console.log(data);
    return (
        <div style={{ overflowX: "scroll" }}>
            <Table>
                <tbody>
                    <tr>
                        <th>№ п/п</th>
                        <th>Зав. № машины</th>
                        <th>Вид ТО</th>
                        <th>Дата проведения ТО</th>
                        <th>Наработка, м/час</th>
                        <th>№ заказ-наряда</th>
                        <th>дата заказ-наряда</th>
                        <th>Организация проводившая ТО</th>
                    </tr>
                    {data.loading || !logged.success || !data.success ? (
                        <tr>
                            <td>Загрузка</td>
                        </tr>
                    ) : (
                        data.data.map((value, idx) => (
                            <tr key={value.id}>
                                <td>{idx + 1}</td>
                                <td>{value.machine.factoryNumberOfMachine}</td>
                                <td>{value.typeOfMaintenance.title}</td>
                                <td>{value.dateOfMaintenance}</td>
                                <td>{value.operatingTime}</td>
                                <td>{value.numberOrderWork}</td>
                                <td>{value.dateOrderWork}</td>
                                <td>{value.maintenanceServiceCompany.first_name}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export { Maintenance };
