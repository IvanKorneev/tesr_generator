import React from "react";
import './table-clas.sass'

const TableCals = () => {
    return (
        <div className="profile-groups__section">
            <div className="group-list__block">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>группа</th>
                        <th>список участников</th>
                        <th>редактировать</th>
                        <th>удалить</th>
                        <th>количество</th>
                        <th>ссылка на вступление</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>10 "А" класс</td>
                        <td><a href="#">посмотреть</a></td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td>20</td>
                        <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>
                    </tr>
                    <tr>
                        <td>10 "B" класс</td>
                        <td><a href="#">посмотреть</a></td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td>20</td>
                        <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>
                    </tr>
                    <tr>
                        <td>10 "C" класс</td>
                        <td><a href="#">посмотреть</a></td>
                        <td><a href="#">редактировать</a></td>
                        <td><a href="#">удалить</a></td>
                        <td>20</td>
                        <td><a href="/join-group/efwsfgdfgdfg">ссылка</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="group-creating__block">
                <button type="button" className="btn btn-outline-success">новая группа</button>


                <input type="text" className="group-name form-control" placeholder="введите название группы"/>
                <button type="button" className="btn btn-outline-success">создать группу</button>
            </div>
        </div>
    )
}
export default TableCals