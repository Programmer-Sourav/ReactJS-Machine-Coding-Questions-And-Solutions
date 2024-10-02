import { isEditable } from "@testing-library/user-event/dist/utils"
import "./todoitem.css"
import { useState } from "react"

export default function TodoList(){
   const [todoItem, setTodoItem] = useState({id: "", title: "", description: "", isEditable: false})
   const [todoItems, setTodoItems] = useState([])


   const addTodo = () =>{
     const modifiedTodo = {...todoItem, id: todoItems.length+1}
     console.log(111, modifiedTodo)
     setTodoItems(todoItems=>[...todoItems, modifiedTodo])
     setTodoItem({title: "", description: "", isEditable: false})
   }

   const changeTitle = (e) =>{
    const title = e.target.value;
    setTodoItem({...todoItem, title})
   }

   const changeDescription = (e) =>{
    const description = e.target.value;
    setTodoItem({...todoItem, description})
   }

   const deleteItem = (todoId) =>{
     const updated = todoItems.filter((todoItem)=>(todoItem.id!==todoId))
     setTodoItems(updated);
   }

   const editItem = (todo) =>{
    const title = todo.title;
    const description = todo.description;
    console.log(333, todo.id, title, description)
    const updated = todoItems.map((todoItem)=>todoItem.id===todo.id ? {...todoItem, title, description, isEditable: false} : todoItem)
    setTodoItems(updated)
   }

   const editItemFlag = (todo) =>{
    setTodoItems(todoItems.map((todoItem)=>todoItem.id=== todo.id? {...todoItem, isEditable: true} : todoItem))
   }

   const handleEditChange = (id, field,  value) =>{
    const updated = todoItems.map((todoItem)=>todoItem.id===id ? {...todoItem, [field]: value} : todoItem )
    setTodoItems(updated)
   }

    return(
        <div> 
          <label> Todo Item Title
          <input type="text" value={todoItem.title} onChange={changeTitle}/>
          </label> 
          <label>Todo Item Description
          <input type="text" value={todoItem.description} onChange={changeDescription}/> 
          </label>
          <button onClick={addTodo}> Add Todo</button>
          <h3>Current Todos</h3>
          {
            todoItems.map((todoItem, id)=>(
                <li>
                 <p>{todoItem.id}</p>  
                {todoItem.isEditable? (<input type="text" value={todoItem.title} onChange={(e)=>{handleEditChange(todoItem.id, "title", e.target.value)}} className="todoinput"/>) : <p>{todoItem.title}</p>}
                {todoItem.isEditable? (<input type="text" value={todoItem.description} onChange={(e)=>{handleEditChange(todoItem.id, "description", e.target.value)}} className="todoinput" />) : <p>{todoItem.description}</p>}
                <p>{todoItem.isEditable}</p>
                <button onClick={()=>deleteItem(todoItem.id)}>Delete</button>
                {todoItem.isEditable ?<button onClick={()=>editItem(todoItem)}>Save Changes</button> : <button onClick={()=>editItemFlag(todoItem)}>Edit Now</button>}
                </li>
            ))
          }
        </div>
    )
}