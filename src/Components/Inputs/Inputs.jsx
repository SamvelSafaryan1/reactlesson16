// import './Inputs.css'

// function Inputs(props){
//     return(
//         <div>
//             <input value={props.text} onChange={(e) => props.setText(e.target.value)}/>
//             <button onClick={props.create}>add</button>
//             {
//                 props.todos.map((todo) => {
//                     return <li key={todo.id}>
//                         <input type={"checkbox"} checked={todo?.completed} onChange={() => props.complited(todo?.id)}/>
//                         <span>{todo?.title}</span>
//                         <button onClick={() => props.del(todo.id)}>delete</button>
//                     </li>
//                 })
//             }
//         </div>
//     )
// }


// export default Inputs
