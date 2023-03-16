import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm(){

//funciones
const[title,setTitle]=useState("")
const[description, setDescription]=useState("")
const {createTask} = useContext(TaskContext)

const handleSubmit=(e)=>{
    e.preventDefault()
    
    createTask({
        title,
        description
    })
    setTitle("")
    setDescription("")
}

    return(
        <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-grey-500 p-5 mb-2">
            <h1 className="text-2xl font-bold text-black mb-3"> Create Task</h1>
            <input 
            placeholder="tarea"
            onChange={(e)=> setTitle(e.target.value)}           
            value={title}
            className="bg-slate-300 p-3 w-full mb-2"
            autoFocus
            />
            <textarea 
            placeholder="description"
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
            className="bg-slate-300 p-3 w-full mb-2"
            autofocus
            >
            </textarea>
            <button className="bg-indigo-500 px-3 py-1 rounded-md mt-2 hover:bg-indigo-200">
                Guardar
            </button>
        
        </form>
        </div>
    )
}
export default TaskForm