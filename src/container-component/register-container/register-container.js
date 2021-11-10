import React, {useState} from "react";
import Register from "../../component/register";

const RegisterContainer = () => {
    const [Registera, setRegister] = useState('');
    console.log(Registera,222)
    return (
        <Register setRegister={setRegister}/>
    )
}
export default RegisterContainer;