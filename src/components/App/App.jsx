import { Component } from 'react'
import { TodoForm, TodoList, TodoFilter,Modal,DeleteItem} from '../Index'

import './App.scss'

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Kitob o'qish 1 soat",
				isChecked: false
			},
			{
				id: 2,
				title: "JavaScript dokumentatsiya o'qish",
				isChecked: false
			},
			{
				id: 3,
				title: "Trenirovka borish",
				isChecked: true
			},
			{
				id: 4,
				title: "Madaniy xordiq",
				isChecked: false
			}
		],
		currentId:5,
		todoIdCount: 4,
		filterStatus: 'All'
	}

	addTodo = (todoTitle) => {
		const todoData = {
			id: this.state.todoIdCount + 1,
			title: todoTitle,
			isChecked: false
		}
		this.setState((prevState) => {
			return {
				todos: [  todoData, ...prevState.todos],
				todoIdCount: prevState.todoIdCount + 1
			}
		})
	}

	changeTodosStatus = (id, status) => {
		const { todos } = this.state

		const newTodos = todos.map((item) => {
			if(item.id !== id){
				return item
			}else{
				return {
					...item,
					isChecked: status
				}
			}
		})

		this.setState(() => {
			return {
				todos: newTodos
			}
		})
	}



	isDeleteItem = (id) => {
		this.setState(() => {
		  return {
			currentId: id
		  }
		})
		this.state.todos.forEach(item => {
		  if(item.id === id){
			if(item.isChecked !== true){
			  document.querySelector('.modal').style.display ='flex'
			}
			else{
			  this.deleteTodo(id)
			}
		  }
		})
	  }
	  deleteTodo = (id) => {
		let modal = document.querySelector('.modal')
		modal.style.display = 'none'
		this.setState(({todos}) => {
			return {
				todos: todos.filter((item) => {
					return item.id !== this.state.currentId
				})
			}
		})
	}

	changeFilterStatus = (status) => {
 		this.setState({ filterStatus: status })
	}

	filterTodos = (todos, status) => {
		switch (status) {
			case "Active":
				return todos.filter((todo) => {
					const {isChecked} = todo
					return !isChecked
				})
			case "Completed":
				return todos.filter((todo) => {
					const {isChecked} = todo
					return isChecked
				})
			default:
				return todos;
		}
	}

 

	render(){
		const { todos, filterStatus } = this.state

		const todosFilter = this.filterTodos(todos, filterStatus)
		return (
			<div className='wrapper'>
				{
					 <Modal 
						deleteTodo= {this.deleteTodo}
						/>
					
				}
				<TodoForm addTodo = {this.addTodo}/>
				<TodoList 
					todos={todosFilter} 
					changeTodosStatus={this.changeTodosStatus}
					deleteTodo={this.isDeleteItem}

				/>
				<TodoFilter filterStatus={filterStatus} changeFilterStatus={this.changeFilterStatus}/>
			<DeleteItem />

			</div>
			
		)
	}
}


export default App