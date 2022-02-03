import React from "react";
import "./styles/App.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Paint from "./components/Paint";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/:id" element={<Paint/>}/>
                    <Route path="/" element={<Navigate replace to={`f${(+new Date()).toString(16)}`}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
