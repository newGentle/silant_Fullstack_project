import * as React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { Table } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MachineData } from "../../Store/Slicers/MainPageSlicer";

function Authorized() {
    const data = useSelector((state) => state.machine);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(MachineData(localStorage.getItem('accessToken')));
    }, [dispatch])
    console.log(data);
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
                        <tr id="machineInfo">
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CustomContainer>
    );
}

export { Authorized };
