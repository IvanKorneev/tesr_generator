import React from "react";
import './app.sass'
import MainPage from "../main-page";
import Auth from "../auth";
import {Routes, Route} from "react-router-dom";
import Register from "../register";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='login' element={<Auth/>}/>
                <Route path='register' element={<Register/>}/>
            </Routes>
        </div>

    )
}
export default App;