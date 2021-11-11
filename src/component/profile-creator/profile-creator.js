import React from "react";
import './profile-creator.sass'
import TableTest from "../table-test";
import TableCals from "../table-clas";
import TestCreating from "../test-creating";
import {Link} from "react-router-dom";

const ProfileCreator = () => {
    return (
        <div className="profile-wrapper__section">
            <header className="profile-header__section">
                <div className="breadcrumb__block">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Личный кабинет</a></li>
                        <li className="breadcrumb-item"><Link to='/main-page'>Мои тесты</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Тест по математике</li>
                    </ol>
                </div>
                <div className="navbar__block">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Мои тесты</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Мои группы</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Настройки аккаунта</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="alert__block">
                список алертов разных цветов см тут:
                https://getbootstrap.com/docs/5.1/components/alerts/

                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> Тест успешно создан!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <main className="profile-content__section">
                <TableTest/>
                <TableCals/>
                <TestCreating/>


                {/*<div class="profile-settings__section">*/}
                {/*    */}
                {/*</div>*/}

            </main>
        </div>
    )
}
export default ProfileCreator;