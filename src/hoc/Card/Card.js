import React from 'react';
import style from './Card.module.css';
const card = (props) => {
    return <div className={style.Card}>{props.children}</div>
}
export default card;