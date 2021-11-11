import React from "react";
import './app.sass'

import {Routes, Route} from "react-router-dom";
import AuthContainer from "../../container-component/auth-container";
import RegisterContainer from "../../container-component/register-container";
import ProfileCreator from "../profile-creator";
import MainPage from "../main-page";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProfileCreator/>}/>
                <Route path='login' element={<AuthContainer/>}/>
                <Route path='register' element={<RegisterContainer/>}/>
                <Route path='main-page' element={<MainPage/>}/>
            </Routes>
        </div>

    )
}
export default App;