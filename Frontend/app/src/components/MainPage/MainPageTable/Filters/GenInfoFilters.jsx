import * as React from "react";

const GenInfoFilters = () => {
    function filter(id, item) {
        let _item = document.getElementById(item).value;
        const tbody = document.querySelector("tbody");
        const tr = tbody.querySelectorAll("tr");

        for (let index = 2; index < tr.length; index++) {
            const element = tr[index]
                .querySelectorAll("td")
                [id].querySelector("a").textContent;
            if (!element.includes(_item.toUpperCase())) {
                tr[index].style.display = "none";
            } else {
                tr[index].style.display = "table-row";
            }
        }
    }

    function clearOtherInputs() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((item) => {
            item.value = "";
        });
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <label>
                Модель техники<br />
                <input
                    type="text"
                    placeholder="техника"
                    id={"machine"}
                    onClick={() => {
                        clearOtherInputs();
                    }}
                    onChange={() => {
                        filter("1", "machine");
                    }}
                    style={{ margin: "10px 0", width: "100%" }}
                />
            </label>
            <label>
                Модель двигателя<br />
                <input
                    type="text"
                    placeholder="Двигатель"
                    id={"engine"}
                    onClick={() => {
                        clearOtherInputs();
                    }}
                    onChange={() => {
                        filter("3", "engine");
                    }}
                    style={{ margin: "10px 0", width: "100%" }}
                />
            </label>
            <label>
                Модель трансмиссии<br />
                <input
                    type="text"
                    placeholder="Трансмиссия"
                    id={"transmission"}
                    onClick={() => {
                        clearOtherInputs();
                    }}
                    onChange={() => {
                        filter("5", "transmission");
                    }}
                    style={{ margin: "10px 0", width: "100%" }}
                />
            </label>
            <label>
                Модель ведущего моста<br />
                <input
                    type="text"
                    placeholder="Ведущий мост"
                    id={"mainAxle"}
                    onClick={() => {
                        clearOtherInputs();
                    }}
                    onChange={() => {
                        filter("7", "mainAxle");
                    }}
                    style={{ margin: "10px 0", width: "100%" }}
                />
            </label>
            <label>
                Модель управляемого моста<br />
                <input
                    type="text"
                    placeholder="Управляемый мост"
                    id={"steeringAxle"}
                    onClick={() => {
                        clearOtherInputs();
                    }}
                    onChange={() => {
                        filter("9", "steeringAxle");
                    }}
                    style={{ margin: "10px 0", width: "100%" }}
                />
            </label>
        </div>
    );
};

export { GenInfoFilters };