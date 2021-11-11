import React, {useState} from "react";
import Register from "../../component/register";

const RegisterContainer = () => {
    const [Registers, setRegister] = useState('');
    console.log(Registers,222)
    return (
        <Register setRegister={setRegister}/>
    )
}
export default RegisterContainer;