import * as React from "react";
import { GenInfo } from "../../MainPage/MainPageTable/Tabs/GenInfo";
import { Maintenance } from "../../MainPage/MainPageTable/Tabs/Maintenance";
import { Complaints } from "../../MainPage/MainPageTable/Tabs/Complaints";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import "./MainPageTable.css";

const MainPageTable = (props) => {
    const { complaints, maintenance, order } = props
    const [value, setValue] = React.useState(0);

    const tabChange = (e, newContent) => {
        setValue(newContent);
    };

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs variant="fullWidth" value={value} onChange={tabChange}>
                    <Tab label="Общая Информация" {...a11yProps(0)} />
                    <Tab label="ТО" {...a11yProps(1)} />
                    <Tab label="Рекламация" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <GenInfo order={order} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Maintenance maintenance={maintenance} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Complaints complaints={complaints} />
            </CustomTabPanel>
        </Box>
    );
};

export { MainPageTable };
