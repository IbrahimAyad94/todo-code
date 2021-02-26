import React, { Component } from 'react';
import TodoForm from '../../components/Todo/TodoForm/TodoForm'
import TodoList from '../../components/Todo/TodoList/TodoList'
import style from './Todo.module.css';
import AppContext from '../../context/Context';
class Todo extends Component {
    static contextType = AppContext;
    todoListBackup = [];
    selectedCategoryName = 'All';

    state = {
        title: '',
        description: '',
        categoryName: '',
        categoriesList: [],
        todoList: []
    }

    componentDidMount() {
        const categoriesList = JSON.parse(localStorage.getItem('CAT'));
        const todoList = JSON.parse(localStorage.getItem('TO_DO'));
        this.setState({categoriesList: categoriesList ? categoriesList : [], todoList: todoList ? todoList : []});
        this.todoListBackup = todoList ? todoList : [];
    }

    onAddTodo = () => { 
        const newTodo = {
            id: this.state.updatedTodo ? this.state.updatedTodo : new Date(),
            title: this.state.title,
            description: this.state.description,
            categoryName: this.state.categoryName,
            status: 'New'
        }
        const newTodoListBackup = [...this.todoListBackup];
        if (this.state.updatedTodo) {
            const backupIndex = newTodoListBackup.findIndex(item => item.id == this.state.updatedTodo);
            newTodoListBackup[backupIndex] = newTodo;
            this.updateBackupAndStoreInLocalStorage(newTodoListBackup);
            this.processFilter();
        } else {
            newTodoListBackup.splice(0, 0, newTodo);
            this.updateBackupAndStoreInLocalStorage(newTodoListBackup);
            this.processFilter();
            this.context.updateInProgress(this.context.inProgress + 1);
        }
    }

    onEditTodo = (id) => {
        const newTodoList =  [...this.state.todoList];
        const item = newTodoList.find(i => i.id == id);
        this.setState({ title: item.title, description: item.description, categoryName: item.categoryName, updatedTodo: id});
    }

    onDoneTodo = (id) => {
       let newTodoList = [...this.state.todoList];
       let index = newTodoList.findIndex(i => i.id == id);
       newTodoList[index].status = "Done";
       this.setState({todoList: newTodoList});

       newTodoList = [...this.todoListBackup];
       index = newTodoList.findIndex(i => i.id == id);
       newTodoList[index].status = "Done";
       this.updateBackupAndStoreInLocalStorage(newTodoList);
       
       this.context.updateDone(this.context.done + 1);
       this.context.updateInProgress(this.context.inProgress - 1);
    }

    onDeleteTodo = (id) => { 
        let newTodoList =  [...this.state.todoList];
        const item = newTodoList.find(i => i.id == id);
        newTodoList = newTodoList.filter(i => i.id !== id);
        this.setState({todoList: newTodoList});
        if (item.status == 'Done') {
            this.context.updateDone(this.context.done - 1);
        } else {
            this.context.updateInProgress(this.context.inProgress - 1);
        }
        newTodoList = [...this.todoListBackup];
        newTodoList = newTodoList.filter(i => i.id != id);
        this.updateBackupAndStoreInLocalStorage(newTodoList);
    }

    
    onFilterTodo = (event) => {
        this.selectedCategoryName = event.target.value;
        this.processFilter();
    }

    processFilter = () => {
        console.log(this.selectedCategoryName);
        if (this.selectedCategoryName == 'All') {
            //this.setState({todoList: this.todoListBackup});
            this.setState({todoList: this.todoListBackup, title: '', description: '', categoryName: '', updatedTodo: null});

        } else {
           const newTodoList =  this.todoListBackup.filter(item => item.categoryName == this.selectedCategoryName);
          // this.setState({todoList: newTodoList});
           this.setState({todoList: newTodoList, title: '', description: '', categoryName: '', updatedTodo: null});

        }
    }
// form 

    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeCategory = (e) => {
        this.setState({categoryName: e.target.value});
        
    }

    onChangeDescription = (e) => {
        this.setState({description: e.target.value});
    }
  
    // helper methods 
    updateBackupAndStoreInLocalStorage = newTodoList => {
        this.todoListBackup = newTodoList;
        localStorage.setItem("TO_DO", JSON.stringify(newTodoList));
    }

    onCancel = () => {
        this.setState({
            title: '',
            description: '',
            categoryName: '',
        });
    }
    render() {
        return (
            <div>
               <TodoForm
                categoriesList={this.state.categoriesList}
                categoryName={this.state.categoryName}
                description={this.state.description}
                title={this.state.title}

                onChangeTitle={this.onChangeTitle}
                onChangeCategory={this.onChangeCategory}
                onChangeDescription={this.onChangeDescription}

                onAddTodo={this.onAddTodo}
                onCancel={this.onCancel}
               /> 

               <hr/>

               <TodoList 
                    list={this.state.todoList}
                    categoriesList={this.state.categoriesList}
                    onEditTodo={this.onEditTodo}
                    onDeleteTodo={this.onDeleteTodo}
                    onDoneTodo={this.onDoneTodo}
                    onFilterTodo={this.onFilterTodo}
               />
            </div>
        )
    }
}

export default  Todo;
