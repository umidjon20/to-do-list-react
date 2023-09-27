import { Component } from "react";
import { TodoListItem } from "../Index";
import './TodoList.scss'

export class TodoList extends Component{

	render(){
		const { todos, changeTodosStatus, deleteTodo} = this.props
		return (
			<ul className="todo-list">
				{
					todos.map((todo) => {
						const {id ,title, isChecked } = todo
						return <TodoListItem 
							key={id} 
							changeTodosStatus={
								(status) => {changeTodosStatus(id, status)}
							}
							deleteTodo={() => {
								deleteTodo(id)
							}}

							title={title} 
							isChecked={isChecked}/>
					})
				}
				
			</ul>
		)
	}
}