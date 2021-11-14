import React, {useState} from "react";
import Auth from "../../component/auth";
import {connect} from "react-redux";


const AuthContainer = ({testss}) => {
    console.log(testss)

    const [login, setLogin] = useState('');
    console.log(login,111)
    return (
        <Auth setLogin={setLogin}/>
    )
}
const mapStateToProps = state => {
    return{
        testss: state.testReducer.test
    }
}



export default connect(mapStateToProps) (AuthContainer);