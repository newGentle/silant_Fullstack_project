import * as React from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    ThemeProvider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { theme } from "../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import {
    EngineData,
    MachineListData,
    MainAxleData,
    SteeringAxleData,
    TransmissionData,
    UsersData,
} from "../../Store/Slicers/HandbookSlicer";

const AddMachine = () => {
    const disptach = useDispatch();

    const handbookList = useSelector((state) => state.handbook);

    React.useEffect(() => {
        disptach(MachineListData());
        disptach(EngineData());
        disptach(TransmissionData());
        disptach(MainAxleData());
        disptach(SteeringAxleData());
        disptach(UsersData());
    }, [disptach]);

    const [factoryNumberOfMachine, setFactoryNumberOfMachine] =
        React.useState("");
    const [factoryNumberOfEngine, setFactoryNumberOfEngine] =
        React.useState("");
    const [factoryNumberOfTransmission, setFactoryNumberOfTransmission] =
        React.useState("");
    const [factoryNumberOfMainAxle, setFactoryNumberOfMainAxle] =
        React.useState("");
    const [factoryNumberOfSteeringAxle, setFactoryNumberOfSteeringAxle] =
        React.useState("");
    const [dateOfShipment, setDateOfShipment] = React.useState("");
    const [supplyContract, setSupplyContract] = React.useState("");
    const [consumer, setConsumer] = React.useState("");
    const [operationAddress, setOperationAddress] = React.useState("");
    const [additionalOptions, setAdditionalOptions] = React.useState("");
    const [machine, setMachine] = React.useState("");
    const [engine, setEngine] = React.useState("");
    const [transmission, setTransmission] = React.useState("");
    const [mainAxle, setMainAxle] = React.useState("");
    const [steeringAxle, setSteeringAxle] = React.useState("");
    const [client, setClient] = React.useState("");
    const [serviceCompany, setServiceCompany] = React.useState("");
    
    const formSubmit = (event) => {
        event.preventDefault();
        console.log(
            JSON.stringify({
                machine: factoryNumberOfMachine,
            })
        );
    };
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={formSubmit}
            >
                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Зав. № Техники"
                        onChange={(e) =>
                            setFactoryNumberOfMachine(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="modelofmachine">Модель Техники</InputLabel>
                    <Select
                        name="modelofmachine"
                        value={machine || ""}
                        labelId="modelofmachine"
                        label="Модель Техники"
                        onChange={(e) => setMachine(e.target.value)}
                    >
                        {handbookList.machinelist &&
                            handbookList.machinelist.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Зав. № двигателя"
                        onChange={(e) =>
                            setFactoryNumberOfEngine(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="modelofengine">Модель двигателя</InputLabel>
                    <Select
                        defaultValue="default"
                        name="modelofengine"
                        value={engine || ""}
                        labelId="modelofengine"
                        label="Модель двигателя"
                        onChange={(e) => setEngine(e.target.value)}
                    >
                        {handbookList.engine &&
                            handbookList.engine.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Зав. № трансмиссии"
                        onChange={(e) =>
                            setFactoryNumberOfTransmission(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="modeloftransmission">
                        Модель трансмиссии
                    </InputLabel>
                    <Select
                        name="modeloftransmission"
                        value={transmission}
                        labelId="modeloftransmission"
                        label="Модель трансмиссии"
                        onChange={(e) => setTransmission(e.target.value)}
                    >
                        {handbookList.transmission &&
                            handbookList.transmission.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Зав. № ведущего моста"
                        onChange={(e) =>
                            setFactoryNumberOfMainAxle(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="modelofmainaxle">
                        Модель ведущего моста
                    </InputLabel>
                    <Select
                        name="modelofmainaxle"
                        value={mainAxle}
                        labelId="modelofmainaxle"
                        label="Модель ведущего моста"
                        onChange={(e) => setMainAxle(e.target.value)}
                    >
                        {handbookList.mainaxle &&
                            handbookList.mainaxle.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Зав. № управляемого моста"
                        onChange={(e) =>
                            setFactoryNumberOfSteeringAxle(e.target.value)
                        }
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="modelofsteeringaxle">
                        Модель управляемого моста
                    </InputLabel>
                    <Select
                        name="modelofsterringaxle"
                        value={steeringAxle}
                        labelId="modelofsteeringaxle"
                        label="Модель управляемого моста"
                        onChange={(e) => setSteeringAxle(e.target.value)}
                    >
                        {handbookList.steeringaxle &&
                            handbookList.steeringaxle.map((item) => (
                                <MenuItem key={item.id} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Договор поставки №, дата"
                        onChange={(e) => setSupplyContract(e.target.value)}
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                                value={dateOfShipment}
                                label="Дата отгрузки с завода"
                                onChange={(value) => setDateOfShipment(value.$d)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Грузополучатель"
                        onChange={(e) => setConsumer(e.target.value)}
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextField
                        label="Адрес поставки"
                        onChange={(e) => setOperationAddress(e.target.value)}
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Доп. опции"
                        onChange={(e) => setAdditionalOptions(e.target.value)}
                    />
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="client">Клиент</InputLabel>
                    <Select
                        name="client"
                        value={client}
                        labelId="client"
                        label="Клент"
                        onChange={(e) => setClient(e.target.value)}
                    >
                        {handbookList.users &&
                            handbookList.users.map((item) => (
                                <MenuItem key={item.id} value={item.first_name}>
                                    {item.first_name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl style={{ margin: "10px 0" }}>
                    <InputLabel id="seviceCompany">
                        Сервисная компания
                    </InputLabel>
                    <Select
                        id="serviceCompany"
                        name="serviceCompany"
                        value={serviceCompany}
                        labelId="serviceCompany"
                        label="Сервисная компания"
                        onChange={(e) => setServiceCompany(e.target.value)}
                    >
                        {handbookList.users &&
                            handbookList.users.map((item) => (
                                <MenuItem key={item.id} value={item.first_name}>
                                    {item.first_name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <ThemeProvider theme={theme}>
                    <Button type="submit">Добавить</Button>
                </ThemeProvider>
            </form>
        </div>
    );
};

export { AddMachine };
