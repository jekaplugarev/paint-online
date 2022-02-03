import React from "react";
import ToolBar from "./ToolBar";
import SettingBar from "./SettingBar";
import Canvas from "./Canvas";

const Paint = () => {
    return (
        <>
            <ToolBar/>
            <SettingBar/>
            <Canvas/>
        </>
    );
}

export default Paint;