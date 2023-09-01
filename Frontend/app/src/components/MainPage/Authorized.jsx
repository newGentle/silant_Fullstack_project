import * as React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import { MainPageTable } from "./MainPageTable/MainPageTable";
import { ComplaintsData } from "../../Store/Slicers/ComplaintsSlicer";
import { MachineData } from "../../Store/Slicers/MachineSlicer";
import { MaintenanceData } from "../../Store/Slicers/MaintenanceSlicer";

const Authorized = () => {

    const dispatch = useDispatch();
    const logged = useSelector((state) => state.user);
    const complaints = useSelector((state) => state.complaints);
    const machine = useSelector((state) => state.machine);
    const maintenance = useSelector((state) => state.maintenance);
    const user = useSelector((state) => state.user)

    React.useEffect(() => {
        if (logged.success || localStorage.getItem("accessToken")) {
            dispatch(ComplaintsData(localStorage.getItem("accessToken")));
            dispatch(MachineData(localStorage.getItem("accessToken")));
            dispatch(MaintenanceData(localStorage.getItem("accessToken")));
        }
    }, [dispatch, logged]);
    return (
        <CustomContainer>
            <h1 style={{textAlign: "center"}}>{logged.success ? logged.data[0].role : 'Загрузка...'} </h1>
            <h2 style={{textAlign: "center"}}>Информация о комплектации и технических характеристиках Вашей техники</h2>
            <p style={{textAlign: 'center', marginTop: '40px'}}>Таблица с данными (выдача результата)</p>
            <MainPageTable machine={machine} complaints={complaints} maintenance={maintenance} user={user}/>
        </CustomContainer>
    );
};

export { Authorized };
