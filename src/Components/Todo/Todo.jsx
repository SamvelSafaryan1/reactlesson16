import { useState } from 'react'
import Inputs from '../Inputs/Inputs'
import './Todo.css'

function Todo(props){
  let [todos,setTodos] = useState([])
  let [text, setText] = useState('')
  let url = 'https://jsonplaceholder.typicode.com/'

  let create = () => {
    fetch(url + '/todos', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({title: text, completed: false})
    }).then((res) => res.json())
    .then((res) => setTodos([res, ...todos]))
  }
  
  let del = (id) => {
    fetch(url + `todos/${id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(() => setTodos(todos.filter(todo => todo.id !== id)),
        setText("")
    )
  }

  let complited = ({id,completed}) => {
    fetch(url + `/todos/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({completed: !completed})
    })
  }

  return(
    <div className="app">
      <Inputs todos={todos} text={text} 
      create={create} 
      complited={complited} 
      del={del} 
      setText={setText}/>
    </div>
  )

}

export default Todo
