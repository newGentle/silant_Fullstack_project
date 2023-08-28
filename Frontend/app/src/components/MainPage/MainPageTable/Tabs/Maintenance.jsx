import { Link, Table } from "@mui/material";
import * as React from "react";


const Maintenance = (props) => {
    const { maintenance } = props;

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
                    {maintenance.loading || !maintenance.success ? (
                        <tr>
                            <td>Загрузка</td>
                        </tr>
                    ) : (
                        maintenance.data.map((value, idx) => (
                            <tr key={value.id}>
                                <td>{idx + 1}</td>
                                <td>{value.machine.factoryNumberOfMachine}</td>
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
                                        href={`servicecompany/${value.maintenanceServiceCompany.id}`}
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
    );
};

export { Maintenance };
