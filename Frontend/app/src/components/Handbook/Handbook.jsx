import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    EngineData,
    TransmissionData,
} from "../../Store/Slicers/HandbookSlicer";

const Handbook = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const key = Object.keys(params)[0];
    const id = Object.values(params)[0];
    const handbook = useSelector((state) => state.handbook);

    React.useEffect(() => {
        if (key === "engine") {
            dispatch(EngineData(id));
        }

        if (key === "transmission") {
            dispatch(TransmissionData(id));
        }
    }, [key, dispatch, id]);

    return (
        <div>
            {handbook.success && key === "engine" ? (
                <>
                    <h1>{handbook.engine.title}</h1>
                    <h3>{handbook.engine.description}</h3>
                </>
            ) : handbook.success && key === "transmission" ? (
                <>
                    <h1>{handbook.transmission.title}</h1>
                    <h3>{handbook.transmission.description}</h3>
                </>
            ) : handbook.success && key === "mainaxle" ? (
                <>
                    <h1>{handbook.mainaxle.title}</h1>
                    <h3>{handbook.mainaxle.description}</h3>
                </>
            ) : handbook.success && key === "steeringaxle" ? (
                <>
                    <h1>{handbook.mainaxle.title}</h1>
                    <h3>{handbook.mainaxle.description}</h3>
                </>
            ) : (
                <> </>
            )}
        </div>
    );
};

export { Handbook };
