import React from "react";
import './auth.sass';
import {useFormik} from 'formik';

const Auth = ({setLogin}) => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            setLogin(values,111)
        }
    })
    return (
        <div className="auth__block">
            <h1>Авторизация</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="form-control"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password"
                           name='password'
                           className="form-control"
                           id="password"
                           onChange={formik.handleChange}
                           value={formik.values.password}
                    />
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