import React from "react";
import './test-creating.sass'

const TestCreating = () => {
    return (
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

            <div className="question-adding__block">
                <h2>Добавление вопроса</h2>
                <input type="text" className="form-control form-control-sm" placeholder="введите текст вопроса"/>


                {/*тут нужно сделать так, чтобы можно было*/}
                {/*добавить вопрос с одним ответом*/}
                {/*вопрос с вариантами ответов: можно выбрать один или несколько*/}

                {/*сделать так, чтобы можно было добавить картинку*/}

            </div>

        </div>
    )
}
export default TestCreating