import React from 'react'
import style from './BackTick.module.css';


const backTick = (props) => {

    let backTickClassess = [style.close];
    if (props.show) {
        backTickClassess.push(style.showBackTick);
    } else {
        backTickClassess.push(style.hideBackTick);
    }

    return (
        <div 
            className={backTickClassess.join(' ')} 
            onClick={props.hideSideBar}>
        </div>
    )
}

export default backTick;