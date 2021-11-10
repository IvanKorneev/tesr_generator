import React from "react";
import './register.sass'
import {useFormik} from "formik";

const Register = ({setRegister}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm:'',
            fio:''
        },
        onSubmit: values => {
            setRegister(values)
        }
    })

    return (
        <div className="register__block">
            <h1>Регистрация</h1>
            <form onSubmit={formik.handleSubmit}>
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
                    <input type="email"
                           name='email'
                           className="form-control"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password"
                           name='password'
                           className="form-control"
                           onChange={formik.handleChange}
                           value={formik.values.password}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password-confirm" className="form-label">Подтверждение пароля</label>
                    <input type="password"
                           name="passwordConfirm"
                           className="form-control"
                           onChange={formik.handleChange}
                           value={formik.values.passwordConfirm}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fio" className="form-label">ФИО</label>
                    <input type="text"
                           name='fio'
                           className="form-control"
                           onChange={formik.handleChange}
                           value={formik.values.fio}
                    />
                </div>
                <button type="submit" className="btn btn-primary">зарегистрироваться</button>
            </form>
        </div>
    )
}
export default Register;