import * as React from "react";
import { Link, Table } from "@mui/material";

const GenInfo = (props) => {
    const { order } = props;

    return (
        <div style={{ overflowX: "scroll" }}>
            <Table>
                <tbody>
                    <tr>
                        <th colSpan="16">ОБЩИЕ СВЕДЕНИЯ</th>
                    </tr>
                    <tr>
                        <th>№ п/п</th>
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
                        <th>Дата отгрузки с завода</th>
                        <th>Покупатель</th>
                        <th>Грузополучатель (конечный потребитель)</th>
                        <th>Адрес поставки (эксплутация)</th>
                        <th>Комплектация (доп. опции)</th>
                        <th>Сервисная компания</th>
                    </tr>
                    {order.loading || !order.success ? (
                        <tr>
                            <td>Загрузка</td>
                        </tr>
                    ) : (
                        order.data.map((value, idx) => (
                            <tr key={value.id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <Link
                                        href={`machine/${value.machine.factoryNumberOfMachine}`}
                                    >
                                        {value.machine.modelOfMachine.title}
                                    </Link>
                                </td>
                                <td>{value.machine.factoryNumberOfMachine}</td>

                                <td>
                                    <Link
                                        href={`engine/${value.machine.modelOfEngine.id}`}
                                    >
                                        {value.machine.modelOfEngine.title}
                                    </Link>
                                </td>
                                <td>{value.machine.factoryNumberOfEngine}</td>
                                <td>
                                    <Link
                                        href={`transmission/${value.machine.modelOfTransmission.id}`}
                                    >
                                        {
                                            value.machine.modelOfTransmission
                                                .title
                                        }
                                    </Link>
                                </td>
                                <td>
                                    {value.machine.factoryNumberOfTransmission}
                                </td>
                                <td>
                                    <Link
                                        href={`mainaxle/${value.machine.modelOfMainAxle.id}`}
                                    >
                                        {value.machine.modelOfMainAxle.title}
                                    </Link>
                                </td>
                                <td>{value.machine.factoryNumberOfMainAxle}</td>
                                <td>
                                    <Link
                                        href={`steeringaxle/${value.machine.modelOfSteeringAxle.id}`}
                                    >
                                        {
                                            value.machine.modelOfSteeringAxle
                                                .title
                                        }
                                    </Link>
                                </td>
                                <td>
                                    {value.machine.factoryNumberOfSteeringAxle}
                                </td>
                                <td>{value.dateOfShipment}</td>
                                <td>
                                    <Link href={`client/${value.client.id}`}>
                                        {value.client.first_name}
                                    </Link>
                                </td>
                                <td>
                                    <Link href={`consumer/${value.consumer.id}`}>
                                        {value.consumer}
                                    </Link>
                                </td>

                                <td>{value.operationAddress}</td>
                                <td>{value.additionalOptions}</td>
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
    );
};

export { GenInfo };
