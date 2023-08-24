import React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { Table } from '@mui/material';

function Unauthorized() {
  return (
    <CustomContainer>
    <div style={{ overflowX: "scroll" }}>
        <Table>
            <tbody>
                <tr>
                    <th colspan="10">ОБЩИЕ СВЕДЕНИЯ</th>
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
                    <td>1 0</td>
                </tr>
            </tbody>
        </Table>
    </div>
</CustomContainer>
  )
}

export { Unauthorized }

