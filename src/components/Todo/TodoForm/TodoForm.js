import React from 'react'
import style from './TodoForm.module.css';
import Button from '../../UI/Buttons/Buttons';

const todoForm = (props) => {
    return (
        <div className="container">

            <div className={style.FormRow}>
                <label className={style.Title} htmlFor="title"> Title: </label>
                <input
                    className={style.Input}
                    value={props.title}
                    onChange={props.onChangeTitle}
                    name="title"
                    id="title"
                    placeholder="Type Todo Title "
                />
            </div>

            <div className={style.FormRow}>

                <label className={style.Title} htmlFor="title"> Category: </label>
                <select
                    value={props.categoryName}
                    onChange={props.onChangeCategory}
                >
                    <option value={null}>--Select Category--</option>
                    {
                        props.categoriesList.map(i => {
                            return <option key={i.id} value={i.name}>{i.name}</option>
                        })
                    }
                </select>
            </div>

            <div className={style.FormRow}>
                <label className={style.Title} htmlFor="title"> Description: </label>
                    
                <textarea value={props.description} onChange={props.onChangeDescription} placeholder="Type Todo Body " />
            </div>

            <Button btnType="sucess" onClick={props.onAddTodo}>Save</Button>
            <Button btnType="danger" onClick={props.onCancel}>Cancel</Button>
        </div>
    )
}

export default todoForm;