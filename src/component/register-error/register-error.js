import React from "react";
import './register-error.sass'
const RegisterError = ()=>{
    return(
        <div className="auth__block">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="form-text alert alert-danger">
                        Введите корректный email
                    </div>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememeber"/>
                        <label className="form-check-label" htmlFor="rememeber">запомнить меня</label>
                </div>
                <button type="submit" className="btn btn-primary">войти</button>
            </form>
        </div>
    )
}
export default RegisterError;