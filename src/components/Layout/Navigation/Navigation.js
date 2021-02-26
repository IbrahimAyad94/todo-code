import React from 'react';
import Counter from '../Counter/Counter'
import { FaBars } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';

import style from './Navigation.module.css';
import Navbar from '../Nabar/Navbar';

class Navigation extends React.Component {

    state = {
        showSideBar: false
    }

    onClickBarHandler = () => {
        this.setState({showSideBar: true})
    }
    hideSideBar = () => {
        console.log('close ')
        this.setState({showSideBar: false})
    }

    render() {
        return (
            <div className={style.Navbar}>

                <div className={style.Bars} onClick={this.onClickBarHandler}><FaBars size="25"/></div>

                <Navbar 
                    className={style.TopBar}
                />

                <SideBar 
                    show={this.state.showSideBar} 
                    hideSideBar={this.hideSideBar}
                />

                <Counter />

            </div>
        )
    }
}


export default Navigation;