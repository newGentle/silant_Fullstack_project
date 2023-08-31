import * as React from "react";
import { Link, Table } from "@mui/material";
import { ComplaintsFilters } from "../Filters/ComplaintsFilters";

const Complaints = (props) => {
    const { complaints } = props;

    return (
        <>
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
                                            href={`nodeoffFailure/${value.nodeOfFailure.id}`}
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
