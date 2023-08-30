import * as React from "react";
import { Link, Table } from "@mui/material";
import { MaterialReactTable } from 'material-react-table';

const GenInfo = (props) => {
    const {machine} = props;
    
    return (
        <>
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
                                        {
                                            value.modelOfTransmission
                                                .title
                                        }
                                    </Link>
                                </td>
                                <td>
                                    {value.factoryNumberOfTransmission}
                                </td>
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
                                        {
                                            value.modelOfSteeringAxle
                                                .title
                                        }
                                    </Link>
                                </td>
                                <td>
                                    {value.factoryNumberOfSteeringAxle}
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
        <MaterialReactTable data={machine?.data ?? []}/>
        </>
    );
};

export { GenInfo };
