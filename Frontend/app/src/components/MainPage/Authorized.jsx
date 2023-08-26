import * as React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Table } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OrderData } from "../../Store/Slicers/OrderSlicer";

const Authorized = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.order);
    const logged = useSelector((state) => state.login);

    React.useEffect(() => {
        if (logged.is_Auth){
            dispatch(OrderData(localStorage.getItem('accessToken')));
        }
    }, [dispatch, logged]);


    // if (!data.success) {
    //     console.log(data.data);
    //     return "loading";
    // }

    return (
        <CustomContainer>
            <div style={{ overflowX: "scroll" }}>
                <Table>
                    <tbody>
                        <tr>
                            <th colSpan="16">ОБЩИЕ СВЕДЕНИЯ</th>
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
                            <th>Дата отгрузки с завода</th>
                            <th>Покупатель</th>
                            <th>Грузополучатель (конечный потребитель)</th>
                            <th>Адрес поставки (эксплутация)</th>
                            <th>Комплектация (доп. опции)</th>
                            <th>Сервисная компания</th>
                        </tr>
                        {data.loading || !logged.is_Auth || !data.success ? (
                            <tr>
                                <td>Загрузка</td>
                            </tr>
                        ):
                        (data.data.map((value) => (
                            <tr key={value.id} >
                                <td>{value.machine.modelOfMachine.title}</td>
                                <td>{value.machine.factoryNumberOfMachine}</td>
                                <td>{value.machine.modelOfEngine.title}</td>
                                <td>{value.machine.factoryNumberOfEngine}</td>
                                <td>{value.machine.modelOfTransmission.title}</td>
                                <td>{value.machine.factoryNumberOfTransmission}</td>
                                <td>{value.machine.modelOfMainAxle.title}</td>
                                <td>{value.machine.factoryNumberOfMainAxle}</td>
                                <td>{value.machine.modelOfSteeringAxle.title}</td>
                                <td>{value.machine.factoryNumberOfSteeringAxle}</td>
                                <td>{value.dateOfShipment}</td>
                                <td>{value.client.first_name}</td>
                                <td>{value.consumer}</td>
                                <td>{value.operationAddress}</td>
                                <td>{value.additionalOptions}</td>
                                <td>{value.serviceCompany.first_name}</td>
                            </tr>
                        )))}
                    </tbody>
                </Table>
            </div>

        </CustomContainer>
    );
};

export { Authorized };
