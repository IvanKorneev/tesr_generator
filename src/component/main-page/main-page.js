import React from "react";
import './main-page.sass'
import {Link} from "react-router-dom";
import Pagination from "../pagination";

const MainPage = () => {
    return (
        <div className='main-page'>
            <header className="header__section">
                <div className="profile-link__block">
                    <span className="text">вы не авторизованы</span>
                    <Link to='/login'>войти</Link>
                    <Link to='/register'>зарегистрироваться</Link>
                </div>
                {/*<div class="profile-link__block">*/}
                {/*    <span class="text">вы зашли как "Иванов Иван Иванович"</span>*/}
                {/*    <a href="#">профиль</a>*/}
                {/*    <a href="#">выйти</a>*/}
                {/*</div>*/}
                <div className="header-h1__block">
                    <h1>Пройти тестирование онлайн</h1>
                </div>
            </header>
            <div className="wrapper__section index-wrapper__section">
                <main className="content__section">
                    <div className="test-cards__section">
                        <div className="test-card__block">
                            <h2>Тест знаний математики</h2>
                            <div className="desc">
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                            </div>
                            <div className="link">
                                <button type="button" className="btn btn-outline-primary btn-sm">пройти тест</button>
                            </div>
                        </div>
                        <div className="test-card__block">
                            <h2>Тест знаний программирования</h2>
                            <div className="desc">
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                            </div>
                            <div className="link">
                                <button type="button" className="btn btn-outline-primary btn-sm">пройти тест</button>
                            </div>
                        </div>
                        <div className="test-card__block">
                            <h2>Тест знаний физики</h2>
                            <div className="desc">
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                            </div>
                            <div className="link">
                                <button type="button" className="btn btn-outline-primary btn-sm">пройти тест</button>
                            </div>
                        </div>
                        <div className="test-card__block">
                            <h2>Тест знаний истории</h2>
                            <div className="desc">
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                            </div>
                            <div className="link">
                                <button type="button" className="btn btn-outline-primary btn-sm">пройти тест</button>
                            </div>
                        </div>
                        <div className="test-card__block">
                            <h2>Тест знаний биологии</h2>
                            <div className="desc">
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                                Описание теста. Описание теста. Описание теста.
                            </div>
                            <div className="link">
                                <button type="button" className="btn btn-outline-primary btn-sm">пройти тест</button>
                            </div>
                        </div>
                    </div>
                   <Pagination/>
                </main>
                <aside className="sidebar__section">
                    <div className="select-category__block">
                        <h2>Категории</h2>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/>
                                <span className="text">математика</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" role="switch"/>
                                <span className="text">физика</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" role="switch"/>
                                <span className="text">программирование</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" role="switch"/>
                                <span className="text">история</span>
                            </label>
                        </div>
                    </div>
                </aside>
            </div>
            <footer className="footer__section">
            </footer>
        </div>

    )
}
export default MainPage;