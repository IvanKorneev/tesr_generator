import React from "react";
import './app.sass'
import MainPage from "../main-page";
import {Routes, Route} from "react-router-dom";
import Register from "../register";
import AuthContainer from "../../container-component/auth-container";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='login' element={<AuthContainer/>}/>
                <Route path='register' element={<Register/>}/>
            </Routes>
        </div>

    )
}
export default App;