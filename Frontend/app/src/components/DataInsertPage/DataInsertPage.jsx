import * as React from "react";
import { useParams } from "react-router-dom";
import { FormControl } from "@mui/material";
const DataInsertPage = () => {
    const params = useParams();
    return (
        <div>
            {params.type}
            <FormControl></FormControl>
        </div>
    );
};

export { DataInsertPage };
