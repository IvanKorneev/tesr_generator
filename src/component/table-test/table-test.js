import React from "react";
import './table-test.sass'
const TableTest = ()=>{
    return(
        <div className="profile-tests__section">
            <div className="test-list__block">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>название</th>
                        <th>редактировать</th>
                        <th>удалить</th>
                        <th>ссылка на тест</th>
                        <th>пройден</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Тест по математике</td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td><a href="#">пройти</a></td>
                        <td>20 раз</td>
                    </tr>
                    <tr>
                        <td>Тест по математике</td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td><a href="#">пройти</a></td>
                        <td>20 раз</td>
                    </tr>
                    <tr>
                        <td>Тест по математике</td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td><a href="#">пройти</a></td>
                        <td>20 раз</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="test-creating-link__block">
                <button type="button" className="btn btn-outline-success">создать тест</button>
            </div>
        </div>

    )
}
export default TableTest;