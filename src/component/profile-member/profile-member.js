import React from "react";
import './profile-member.sass'

const ProfileMember = () => {
    return (
        <div className="profile-wrapper__section">
            <header className="profile-header__section">
                <div className="breadcrumb__block">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Личный кабинет</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Мои тесты</li>
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
            <main className="profile-content__section">
                <div className="profile-tests__section">
                    <div className="test-list__block">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>название</th>
                                <th>статус</th>
                                <th>результат</th>
                                <th>повторить</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Тест по математике</td>
                                <td>пройден 2 раза</td>
                                <td>60%, 70%</td>
                                <td><a href="#">пройти еще раз</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="profile-groups__section">
                    <div class="group-list__block">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>группа</th>
                                <th>преподаватель</th>
                                <th>выйти</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>10 "А" класс</td>
                                <td>Иванов Иван Иванович</td>
                                <td><a href="#">выйти</a></td>
                            </tr>
                            <tr>
                                <td>кружок по программированию</td>
                                <td>Сидоров Петр Петрович</td>
                                <td><a href="#">выйти</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    )
}
export default ProfileMember;