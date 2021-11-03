import React from "react";
import './profile-creator.sass'

const ProfileCreator = () => {
    return (
        <div className="profile-wrapper__section">
            <header className="profile-header__section">
                <div className="breadcrumb__block">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Личный кабинет</a></li>
                        <li className="breadcrumb-item"><a href="#">Мои тесты</a></li>
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

                {/*<div class="profile-tests__section">*/}
                {/*    <div class="test-list__block">*/}
                {/*        <table class="table table-bordered">*/}
                {/*            <thead>*/}
                {/*            <tr>*/}
                {/*                <th>название</th>*/}
                {/*                <th>редактировать</th>*/}
                {/*                <th>удалить</th>*/}
                {/*                <th>ссылка на тест</th>*/}
                {/*                <th>пройден</th>*/}
                {/*            </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*            <tr>*/}
                {/*                <td>Тест по математике</td>*/}
                {/*                <td><a href="#">редактировать</a></td>*/}
                {/*                <td><a href="#">удалить</a></td>*/}
                {/*                <td><a href="#">пройти</a></td>*/}
                {/*                <td>20 раз</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>Тест по математике</td>*/}
                {/*                <td><a href="#">редактировать</a></td>*/}
                {/*                <td><a href="#">удалить</a></td>*/}
                {/*                <td><a href="#">пройти</a></td>*/}
                {/*                <td>20 раз</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>Тест по математике</td>*/}
                {/*                <td><a href="#">редактировать</a></td>*/}
                {/*                <td><a href="#">удалить</a></td>*/}
                {/*                <td><a href="#">пройти</a></td>*/}
                {/*                <td>20 раз</td>*/}
                {/*            </tr>*/}
                {/*            </tbody>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*    <div class="test-creating-link__block">*/}
                {/*        <button type="button" class="btn btn-outline-success">создать тест</button>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div class="profile-groups__section">*/}
                {/*    <div class="group-list__block">*/}
                {/*        <table class="table table-bordered">*/}
                {/*            <thead>*/}
                {/*                <tr>*/}
                {/*                    <th>группа</th>*/}
                {/*                    <th>список участников</th>*/}
                {/*                    <th>редактировать</th>*/}
                {/*                    <th>удалить</th>*/}
                {/*                    <th>количество</th>*/}
                {/*                    <th>ссылка на вступление</th>*/}
                {/*                </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*                <tr>*/}
                {/*                    <td>10 "А" класс</td>*/}
                {/*                    <td><a href="#">посмотреть</a></td>*/}
                {/*                    <td><a href="#">редактировать</a></td>*/}
                {/*                    <td><a href="#">удалить</a></td>*/}
                {/*                    <td>20</td>*/}
                {/*                    <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>*/}
                {/*                </tr>*/}
                {/*                <tr>*/}
                {/*                    <td>10 "B" класс</td>*/}
                {/*                    <td><a href="#">посмотреть</a></td>*/}
                {/*                    <td><a href="#">редактировать</a></td>*/}
                {/*                    <td><a href="#">удалить</a></td>*/}
                {/*                    <td>20</td>*/}
                {/*                    <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>*/}
                {/*                </tr>*/}
                {/*                <tr>*/}
                {/*                    <td>10 "C" класс</td>*/}
                {/*                    <td><a href="#">посмотреть</a></td>*/}
                {/*                    <td><a href="#">редактировать</a></td>*/}
                {/*                    <td><a href="#">удалить</a></td>*/}
                {/*                    <td>20</td>*/}
                {/*                    <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>*/}
                {/*                </tr>*/}
                {/*            </tbody>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*    <div class="group-creating__block">*/}
                {/*        <button type="button" class="btn btn-outline-success">новая группа</button>*/}
                {/*        */}
                {/*        */}
                {/*        <input type="text" class="group-name form-control" placeholder="введите название группы">*/}
                {/*        <button type="button" class="btn btn-outline-success">создать группу</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="test-creating__section">
                    <div className="new-test-setting__block">
                        <h2>Создание теста</h2>

                        <h3>настройки теста</h3>
                        <fieldset>
                            <input type="text" className="test-name form-control" placeholder="введите название теста"/>
                        </fieldset>

                        <h3>категория теста</h3>
                        <fieldset>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="category" value=""/>
                                    <span className="text">ввести вручную</span>
                                </label>
                                <input type="text" className="category-input form-control form-control-sm"
                                       placeholder="секунд на вопрос"/>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="category" value=""/>
                                    <span className="text">выбрать из списка</span>
                                </label>
                                <select className="category-select form-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </fieldset>

                        <h3>время теста</h3>
                        <fieldset>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" checked name="time" value=""/>
                                    <span className="text">не ограничивать время теста</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="time" value=""/>
                                    <span className="text">ограничить время теста</span>
                                </label>
                                <input type="text" className="time-per-question form-control form-control-sm"
                                       placeholder="секунд на вопрос"/>
                            </div>
                        </fieldset>

                        <h3>количество попыток</h3>
                        <fieldset>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" checked name="attemps" value=""/>
                                    <span className="text">не ограничивать количество попыток</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="attemps" value=""/>
                                    <span className="text">ограничить количество попыток</span>
                                </label>
                                <input type="text" className="attemps-amount form-control form-control-sm"
                                       placeholder="количество попыток"/>
                            </div>
                        </fieldset>

                        <h3>отображение теста</h3>
                        <fieldset>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="mode" value=""/>
                                    <span className="text">один вопрос за раз</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" checked name="mode" value=""/>
                                    <span className="text">все вопросы сразу</span>
                                </label>
                            </div>
                        </fieldset>

                        <h3>доступность теста</h3>
                        <fieldset>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" checked name="accessibility"
                                           value=""/>
                                    <span className="text">публичный тест</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="accessibility" value=""/>
                                    <span className="text">приватный тест</span>
                                </label>
                            </div>
                        </fieldset>

                        <div className="button-parent">
                            <button type="button" className="btn btn-outline-primary">сохранить тест</button>
                        </div>

                            {/*после сохранения переходим к добавлению вопросов*/}

                    </div>

                    {/*<div class="question-adding__block">*/}
                    {/*    <h2>Добавление вопроса</h2>*/}
                    {/*    <input type="text" class="form-control form-control-sm" placeholder="введите текст вопроса">*/}
                    {/*    */}
                    {/*    */}
                    {/*        тут нужно сделать так, чтобы можно было*/}
                    {/*        добавить вопрос с одним ответом*/}
                    {/*        вопрос с вариантами ответов: можно выбрать один или несколько*/}
                    {/*        */}
                    {/*        сделать так, чтобы можно было добавить картинку*/}
                    {/*    */}
                    {/*</div>*/}

                </div>

                {/*<div class="profile-settings__section">*/}
                {/*    */}
                {/*</div>*/}

            </main>
        </div>
    )
}
export default ProfileCreator;