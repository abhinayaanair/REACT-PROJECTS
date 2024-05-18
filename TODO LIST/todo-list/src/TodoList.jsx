import { useState } from "react";//imported to use useState
import { v4 as uuidv4 } from "uuid";//for unique ids to delete and edit

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(),isDone:false }]);
  let [newTodo, setNewTodo] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentTodo, setCurrentTodo] = useState({});
  let [isUpper,setUpper]=useState(false)

  let addNewTask = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty tasks
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let editTodo = (todo) => {
    setIsEditing(true);
    setNewTodo(todo.task);
    setCurrentTodo(todo);
  };

  let updateTask = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, task: newTodo } : todo
      )
    );
    setNewTodo("");
    setIsEditing(false);
    setCurrentTodo({});
  };

  let markAsDone= (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone:true} : todo
        
      )
    );
    setUpper(true);  
  };

 
  
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone:true
      }))
    );
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={updateTodoValue}
        style={{ width: "20rem" }}
      />
      <br />
      {isEditing ? (
        <button onClick={updateTask}>Update Task</button>
      ) : (
        <button onClick={addNewTask}>Add Task</button>
      )}
      <br />
      <br />
      <br />
      <hr style={{ width: "50rem" }} />
      <h1>TASKS TODO</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>
                
                {todo.task}
            </span>
           
            {console.log(todo.task)}
            <button onClick={() => editTodo(todo)}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>

          
        
        <button onClick={()=>markAsDone(todo.id)}>Mark as done</button>
     
            
          </li>
        ))}
      </ul>


      <button onClick={()=>markAllDone()}>Mark All Done</button>
    </>
  );
}
