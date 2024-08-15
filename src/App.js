import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";


function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => { // have to put hooks (like this) at the top of file and not in a conditional ex. if statement
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]) // will run every time todos changes and save the values locally

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <> 
      <div style={{ backgroundColor: 'grey'}}>
        <h1 class="display-5">Todo List</h1>
        <p class="lead">Add, Check Off, or Delete Items from this Todo List</p>
        <hr class="my-1"/>
      </div>

      <TodoForm onSubmit={addTodo}/>

      <h1>List: </h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> 

      
    </>
  );
}


export default App;
