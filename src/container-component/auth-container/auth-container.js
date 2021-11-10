import React, {useState} from "react";
import Auth from "../../component/auth";

const AuthContainer = () => {

    const [login, setLogin] = useState('');
    console.log(login)
    return (
        <Auth setLogin={setLogin}/>
    )
}
export default AuthContainer;