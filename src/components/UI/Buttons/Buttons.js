import React from 'react'
import style from './Buttons.module.css';
const button = (props) => {
    const btnClasses = [style.btn];
    switch (props.btnType) {
        case 'danger':
            btnClasses.push(style.btnDanger);
            break;
        case 'sucess':
            btnClasses.push(style.btnSuccess);
            break;
    
        default:
            break;
    }
    return (
            <button
                className={btnClasses.join(' ')}
                onClick={props.onClick}
            >{props.children}</button>
    )
}

export default button;
