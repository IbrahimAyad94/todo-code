import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTasks, FaSitemap } from "react-icons/fa";

import style from './Navbar.module.css';

const navbar  = (props) => {

        return (
                <nav className={props.className}>
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
        )
}


export default navbar;