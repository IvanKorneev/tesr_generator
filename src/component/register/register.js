import React from "react";
import './register.sass'
const Register = ()=>{
    return(
        <div className="register__block">
            <h1>Регистрация</h1>
            <form>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="radio"/>
                            <span className="text">я буду создавать тесты</span>
                    </label>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="radio"/>
                            <span className="text">я буду проходить тесты</span>
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password-confirm" className="form-label">Подтверждение пароля</label>
                    <input type="password" className="form-control" id="password-confirm"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fio" className="form-label">ФИО</label>
                    <input type="text" className="form-control" id="fio"/>
                </div>
                <button type="submit" className="btn btn-primary">зарегистрироваться</button>
            </form>
        </div>
    )
}
export default Register;