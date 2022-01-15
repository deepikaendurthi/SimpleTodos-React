// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemList, onDelete} = props
  const {title, id} = todoItemList

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <button type="button" className="btn-element" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
