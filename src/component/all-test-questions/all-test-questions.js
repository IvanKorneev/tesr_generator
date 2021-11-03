import React from "react";
import './all-test-questions.sass'
const AllTestQuestions = ()=>{
    return(
        <div className='all-test-questions'>
            <header className="header__section">
                <div className="test-h1__block">
                    <h1>Тест знаний по математике</h1>
                </div>
            </header>
            <div className="wrapper__section test-wrapper__section">
                <div className="test__section">
                    <div className="test-question__block">
                        <h2>Вопрос 1</h2>
                        <div className="desc">
                            Напишите, каким знаком обозначается операция сложения:
                        </div>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="test-question__block">
                        <h2>Вопрос 2</h2>
                        <div className="desc">
                            Напишите, каким знаком обозначается операция сложения:
                        </div>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="test-question__block">
                        <h2>Вопрос 3</h2>
                        <div className="desc">
                            Число 2 это:
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/>
                                    <span className="text">целое число</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/>
                                    <span className="text">дробное число</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/>
                                    <span className="text">положительное число</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/>
                                    <span className="text">четное число</span>
                            </label>
                        </div>
                    </div>
                    <div className="test-question__block">
                        <h2>Вопрос 4</h2>
                        <div className="desc">
                            Число 2 это:
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">целое число</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">обыкновенная дробь</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">десятичная дробь</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">странное число</span>
                            </label>
                        </div>
                    </div>
                    <div className="test-question__block">
                        <h2>Вопрос 4</h2>
                        <div className="img">
                            {/*<img src="image.jpg" width="100%">*/}
                        </div>
                        <div className="desc">
                            Куда может поехать автомобиль на картинке:
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">налево</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">направо</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">прямо</span>
                            </label>
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="q4"/>
                                <span className="text">на разворот</span>
                            </label>
                        </div>
                    </div>

                    <div className="test-finish__block">
                        <div className="d-grid gap-2">
                            <button className="btn btn-success btn-large" type="button">сдать тест</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AllTestQuestions