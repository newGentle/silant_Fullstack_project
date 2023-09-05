import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import * as React from "react";
import { useState } from "react";
import { theme } from "../../Theme/Theme";

const AddComplaints = () => {
    const formSubmit = (event) => {
        event.preventDefault();
        const body = JSON.stringify({

        })
    };
    const [machine, setMachine] = useState();
    const [dateOfFailure, setDateOfFailure] = useState();
    const [operatingTime, setOperatingTime] = useState();
    const [nodeOfFailure, setNodeOfFailure] = useState();
    const [descriptionOfFailure, setDescriptionOfFailure] = useState();
    const [recoveryMethod, setRecoveryMethod] = useState();
    const [usedSpareParts, setUsedSpareParts] = useState();
    const [dateOfRecovery, setDateOfRecovery] = useState();
    const [serviceCompany, setServiceCompany] = useState();

    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={formSubmit}
            >
                <FormControl
                    style={{ margin: "10px 0", width: "100%" }}
                    required
                >
                    <InputLabel>Выберите Технику</InputLabel>
                    <Select
                        value={machine || ""}
                        label="Выберите Технику"
                        // onChange={(e) => setMachine(e.target.value)}
                    >
                        {/* {settedMachines &&
                            settedMachines.map((item, idx) => (
                                <MenuItem key={idx} value={item}>
                                    {item}
                                </MenuItem>
                            ))} */}
                    </Select>
                </FormControl>

                {/* <FormControl
                    style={{ margin: "10px 0", width: "100%" }}
                    required
                >
                    <InputLabel>Выберите вид ТО</InputLabel>
                    <Select
                        value={maintenance || ""}
                        label="Выберите вид ТО"
                        onChange={(e) => setMaintenance(e.target.value)}
                    >
                        {settedMaintenances &&
                            settedMaintenances.map((item, idx) => (
                                <MenuItem key={idx} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl
                    style={{ margin: "10px 0", width: "100%" }}
                    required
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                                value={dateOfMaintenance || ""}
                                label="Дата проведения ТО"
                                format="YYYY-MM-DD"
                                views={["year", "month", "day"]}
                                onChange={(value) => {
                                    const formattedDate = new Date(value);
                                    const date =
                                        formattedDate.getDate().toString()
                                            .length > 1
                                            ? formattedDate.getDate().toString()
                                            : `0${formattedDate.getDate()}`;
                                    const month =
                                        (
                                            formattedDate.getMonth() + 1
                                        ).toString().length > 1
                                            ? formattedDate.getMonth() + 1
                                            : `0${
                                                  formattedDate.getMonth() + 1
                                              }`;
                                    const year = formattedDate.getFullYear();
                                    setDateOfMaintenance(
                                        year + "-" + month + "-" + date
                                    );
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>

                <FormControl>
                    <TextField
                        required
                        label="Наработка, м/час"
                        onChange={(e) => setOperatingTime(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        required
                        label="№ заказ-наряда"
                        onChange={(e) => setNumberOrderWork(e.target.value)}
                    />
                </FormControl>

                <FormControl
                    style={{ margin: "10px 0", width: "100%" }}
                    required
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                                value={dateOrderWork || ""}
                                label="Дата заказ-наряда"
                                format="YYYY-MM-DD"
                                views={["year", "month", "day"]}
                                onChange={(value) => {
                                    const formattedDate = new Date(value);
                                    const date =
                                        formattedDate.getDate().toString()
                                            .length > 1
                                            ? formattedDate.getDate().toString()
                                            : `0${formattedDate.getDate()}`;
                                    const month =
                                        (
                                            formattedDate.getMonth() + 1
                                        ).toString().length > 1
                                            ? formattedDate.getMonth() + 1
                                            : `0${
                                                  formattedDate.getMonth() + 1
                                              }`;
                                    const year = formattedDate.getFullYear();
                                    setDateOrderWork(
                                        year + "-" + month + "-" + date
                                    );
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>

                <FormControl
                    style={{ margin: "10px 0", width: "100%" }}
                    required
                >
                    <InputLabel>Сервисная компания проводивщая ТО</InputLabel>
                    <Select
                        value={maintenanceServiceCompany || ""}
                        label="Сервисная компания проводивщая ТО"
                        onChange={(e) =>
                            setMaintenanceServiceCompany(e.target.value)
                        }
                    >
                        {settedServiceCompanies &&
                            settedServiceCompanies.map((item, idx) => (
                                <MenuItem key={idx} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl> */}
                <ThemeProvider theme={theme}>
                    <Button type="submit">Добавить</Button>
                </ThemeProvider>
            </form>
        </div>
    );
};

export { AddComplaints };
