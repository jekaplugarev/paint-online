import React from 'react';
import "../styles/ToolBar.scss"
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label
                style={{marginLeft: 10}}
                htmlFor="line-width"
            >
                Толщина линии
            </label>
            <input
                style={{margin: '0 10px'}}
                id="line-width"
                type="number"
                min={1}
                max={50}
                defaultValue={1}
                onChange={(e) => {
                    toolState.setLineWidth(e.target.value)
                }}
            />
            <label
                style={{marginLeft: 10}}
                htmlFor="stroke-color"
            >
                Цвет обводки
            </label>
            <input
                style={{margin: '0 10px'}}
                id="stroke-color"
                type="color"
                onChange={(e) => {
                    toolState.setStrokeColor(e.target.value)
                }}
            />
        </div>
    );
};

export default SettingBar;