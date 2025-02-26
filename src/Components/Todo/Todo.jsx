import { useEffect, useState } from 'react'

import './Todo.css'

function Todo(props){
  let [todos,setTodos] = useState([])
  let [text, setText] = useState('')
  let url = 'https://jsonplaceholder.typicode.com/'

  // useEffect(() => {
  //   fetch(url + '/todos', {
  //     method: "GET"
  //   }).then((res) => res.json())
  //   .then((res) => setTodos(res))
  // }, [])

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
    .then((res) => setTodos(todos.filter(todo => todo.id !== id))
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
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={create}>add</button>
      {
        todos.map((todo) => {
          return <li key={todo.id}>
                    <input type={"checkbox"} checked={todo.completed} onChange={() => complited(todo.id)}/>
                    <span>{todo.title}</span>
                    <button onClick={() => del(todo?.id)}>delete</button>
                  </li>
        })
      }

      {/* <Inputs todos={todos} text={text} 
      create={create} 
      complited={complited} 
      del={del} 
      setText={setText}/> */}
    </div>
  )

}

export default Todo
