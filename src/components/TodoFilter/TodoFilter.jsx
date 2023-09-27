import { Component } from "react";
import Image from '../Img/dustbin.png'
import './TodoFilter.scss'

const filterList = [
	{
		id: 1,
		title: 'All',
	},
	{
		id: 2,
		title: 'Active'
	},
	{
		id: 3,
		title: 'Completed'
	},
	// {
	// 	id:4,
	// 	title:'Recycle'
	// }

]


export class TodoFilter extends Component {
	render(){
		const { filterStatus, changeFilterStatus } = this.props
		const filterContent = filterList.map((filter) => {
			const { title, id } = filter

			const clazz = filterStatus === title ? "active" : ""
			return (
				<li 
					key={id}
					className={clazz} 
					onClick={() => {
						changeFilterStatus(title)
				}}>
					{title}
				</li>
			)
		})

		return (
			<ul className="todo-filter">
				{
					filterContent
				}
				<li className="recycle"> <img src={Image}/>Recycle</li>
			</ul>
		)
	} 
}