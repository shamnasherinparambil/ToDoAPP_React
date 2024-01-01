import React from 'react';
import './App.css';
import {useState} from 'react'
function App() {
  const [ToDos,setToDos]=useState([])
  const [ToDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos ([...ToDos,{id:Date.now(), text:ToDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {   ToDos.map((value)=>{ 

        return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(ToDos.filter(
                obj2=>{
                  if(obj2.id===value.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }
              ))
            }} value= {value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
      })}
      {ToDos.map((value)=>{
        if(value.status){
          return(<h1>{value.text}</h1>)
        }
        return null 
        })}
      </div>
    </div>
  );
}

export default App;