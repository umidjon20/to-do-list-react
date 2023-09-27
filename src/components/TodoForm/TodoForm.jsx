import { Component } from "react";

import './TodoForm.scss'

export class TodoForm extends Component {
	state = {
		title: ''
	}

	handleInput = (e) => {
		this.setState({title: e.target.value})
	}

	submitForm = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({title: ''})
	}

	render(){
		const { title } = this.state

		return (
			<form action="#" onSubmit={this.submitForm}>
				<input 
					type="text" 
					placeholder="Create todo" 
					value={title} 
					onChange={this.handleInput}
				/>
				<button>Add</button>
			</form>
		)
	}
}