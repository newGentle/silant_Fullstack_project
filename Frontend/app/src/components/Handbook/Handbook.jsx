import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EngineData } from "../../Store/Slicers/HandbookSlicer";

const Handbook = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const key = Object.keys(params)[0];
    const id = Object.values(params)[0];
    const handbook = useSelector((state) => state.handbook);
    React.useEffect(() => {
        if (key === 'engine') {
            dispatch(EngineData(id));
        }
    }, [key, dispatch, id]);
    
    return (
    <div>
        {handbook.success 
        ? 
        (
        <>
        <h1>{handbook.engine.title}</h1>
        <h3>{handbook.engine.description}</h3>
        </>
        ) : ('not')}
    </div>
    );
};

export { Handbook };
