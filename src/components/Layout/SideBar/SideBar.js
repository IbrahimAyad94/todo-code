import React from 'react'
import style from './SideBar.module.css';
import { FaHome, FaTasks, FaSitemap } from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import BackTick from '../../UI/BackTick/BackTick';

const sideBar = (props) => {

    let classes = [style.SideBar];
    if (props.show) {
        classes.push(style.Show);
    } else {
        classes.push(style.Hide);
    }

    return (
        <React.Fragment>
            <BackTick 
                show={props.show}
                hideSideBar={props.hideSideBar}
            />
            
            <div className={classes.join(' ')}>
                <section className={style.SideBarHeader}>
                    My To-Do App
                </section>

                <hr />

                <nav className={style.topBar}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                activeClassName={style.active}
                                exact
                            >
                               <FaHome className={style.navIcon} size="18"/> Home
                            </NavLink></li>
                        <li>
                            <NavLink
                                to="/cat"
                                activeClassName={style.active}
                            >
                                <FaSitemap className={style.navIcon} size="18"/> Categories
                                </NavLink></li>
                        <li>
                            <NavLink
                                to="/to-do"
                                activeClassName={style.active}
                            >
                                <FaTasks className={style.navIcon} size="18"/>To-Do
                                </NavLink></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default sideBar;