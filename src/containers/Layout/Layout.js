import React, { Component } from 'react'
import withLayout from '../../hoc/WithLayout/withLayout';
import { Redirect, Route, Switch } from 'react-router-dom';
import Category from '../Category/Category';
import Todo from '../Todo/Todo';
import Home from '../Home/Home';

class Layout extends Component {
 

    render() {
        return (
            <div className="Footer">
                <Switch>
                    <Route path="/cat" component={Category}/>
                    <Route path="/to-do" component={Todo}/>
                    <Route path="/" exact component={Home}/>
                    {/* <Redirect from="/"  to={Home}/> */}
                </Switch>
            </div>
        )
    }
}

export default withLayout(Layout);
