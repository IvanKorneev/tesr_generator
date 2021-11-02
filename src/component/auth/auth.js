import React from "react";
import './auth.sass';

const Auth = () => {
    return (
        <div className="auth__block">
            <h1>Авторизация</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
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
export default Auth;