import React from "react";
import './app.sass'
import MainPage from "../main-page";
import {Routes, Route} from "react-router-dom";
import AuthContainer from "../../container-component/auth-container";
import RegisterContainer from "../../container-component/register-container";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='login' element={<AuthContainer/>}/>
                <Route path='register' element={<RegisterContainer/>}/>
            </Routes>
        </div>

    )
}
export default App;