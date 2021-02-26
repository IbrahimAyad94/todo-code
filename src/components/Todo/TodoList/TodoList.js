import React from 'react'
import style from './TodoList.module.css';
import { FaTrash, FaRegEdit, FaUserGraduate } from "react-icons/fa";
import Card from '../../../hoc/Card/Card';

const todoList = (props) => {

    const todoCards = (props.list && props.list.length > 0) ? props.list.map(it => {
        const styleObj = it.status === "Done" ? { textDecoration: 'line-through' } : null;
        return (
            <Card key={it.id}>
                <div className={style['card-header']}>
                    <div>
                        <div style={styleObj}>{it.title}</div>
                    </div>
                    <div>
                        <button disabled={styleObj ? true : false} onClick={() => props.onEditTodo(it.id)}>
                            <FaRegEdit color="#2398db" className={[style.icon, style.delete].join('')} size="20" />
                        </button>
                        <button disabled={styleObj ? true : false} onClick={() => props.onDoneTodo(it.id)}>
                            <FaUserGraduate color="#350D36" className={[style.icon, style.delete].join('')} size="20" />
                        </button>
                        <button onClick={() => props.onDeleteTodo(it.id)}>
                            <FaTrash color="#E91E63" className={[style.icon, style.edit].join('')} size="20" />
                        </button>
                    </div>
                </div>
                <hr />
                <div style={styleObj} className={style['card-body']}>
                    {it.description}
                </div>
                <hr />
                <div className={style['card-footer']}>
                    <div style={styleObj}>Category : {it.categoryName}</div>
                    <div style={styleObj}>Status : {it.status}</div>
                </div>
            </Card>
        )
    }) : (<div className={[style.CatItem, style.EmptyCard].join(' ')}>
                Not Found Todo With :)
        </div>
    )


    return (
        <div className="container">

            <select
                value={props.categoryName}
                onChange={props.onFilterTodo}
            >
                <option value="All">--Filter By Category (All)--</option>
                {
                    props.categoriesList.map(i => {
                        return <option key={i.id} value={i.name}>{i.name}</option>
                    })
                }
            </select>

            <ul>
                {todoCards}
            </ul>
        </div>
    )
}

export default todoList;