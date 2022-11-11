import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigation } from "react-router-dom";
import Main from "./main/index";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
