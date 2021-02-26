import React, { Component } from 'react'
import CategoriesList from '../../components/categories/CategoriesList/CategoriesList';
import CategoryForm from '../../components/categories/CategoryForm/CategoryForm';
import style from './Category.module.css';

class Category extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            catList: []
        }
    }


    componentDidMount() {
        console.log('[category.js] is mounted')
        const list = JSON.parse(localStorage.getItem('CAT'));
        this.setState({catList: list ? list : []});
    }


    onNameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    onSaveCatHandler = () => {
       // debugger;
       let newList;
        if (this.state.updatedCat) {
        const ind = this.state.catList.findIndex(i => i.id == this.state.updatedCat);
        const newList = [...this.state.catList];
        newList[ind].name=this.state.name;
        this.setState({catList: newList, name: '', updatedCat: null});
        } else {
            newList = [... this.state.catList, {id: new Date(), name: this.state.name}];
            this.setState({catList: newList, name: ''});
        }

        localStorage.setItem('CAT', JSON.stringify(newList))
    }

    onEditHandler = (id) => {
        const cat = this.state.catList.find(i => i.id == id);
        this.setState({updatedCat: id, name: cat.name})
    }

    onRemoveHandler = (id) => {
        const newList = this.state.catList.filter(i => i.id != id);
        localStorage.setItem('CAT', JSON.stringify(newList))
        this.setState({catList: newList});

    }

    onCancel = () => {
        this.setState({name: ''})
    }

    render() {
        return (
            <div>
                <CategoryForm
                    categoryName={this.state.name}
                    changeValue={this.onNameChangeHandler}
                    onSave={this.onSaveCatHandler}
                    onCancel={this.onCancel}
                />
                <CategoriesList
                    list={this.state.catList}
                    remove={this.onRemoveHandler}
                    edit={this.onEditHandler}
                ></CategoriesList>
            </div>
        )
    }
}

export default  Category;
