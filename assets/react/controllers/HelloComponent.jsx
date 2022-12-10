// assets/react/controllers/HelloComponent.jsx
import React from 'react';

export default function (props) {
    return <div>Hello {props.fullName}</div>;
}

import ReactDOM from 'react-dom';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css"

ReactDOM.render(
    <Workbook data={
        [
            { name: "Sheet1",
                celldata:
                    [{
                        "r": 0,
                        "c": 0,
                        "v": {
                            ct: {fa: "General", t: "g"},
                            m:"value1",
                            v:"value1"
                        }
                    }, {
                        "r": 0,
                        "c": 1,
                        "v": {
                            ct: {fa: "General", t: "g"},
                            m:"value2",
                            v:"value2"
                        }
                    }]
            },
            { name: "TOC" }
        ]
    } />,
    document.getElementById('root')
);

// const ref = useRef<WorkbookInstance>("x");

// ref.setCellValuesByRange([[1,2,3],[3,4,5]], {row: [2,3], column: [2,4]});
