import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComplaintsData } from "../../../Store/Slicers/ComplaintsSlicer";
import { Table } from "@mui/material";

const Complaints = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.complaints);
    const logged = useSelector((state) => state.user);

    React.useEffect(() => {
        if (logged.success || localStorage.getItem("accessToken")) {
            dispatch(ComplaintsData(localStorage.getItem("accessToken")));
        }
    }, [dispatch, logged]);

    return (
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
                                <td>{value.dateOfFailure}</td>
                                <td>{value.operatingTime}</td>
                                <td>{value.nodeOfFailure.title}</td>
                                <td>{value.descriptionOfFailure}</td>
                                <td>{value.recoveryMethod.title}</td>
                                <td>{value.usedSpareParts}</td>
                                <td>{value.dateOfRecovery}</td>
                                <td>{value.downtimeOfMachine}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export { Complaints };
