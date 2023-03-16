import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/tasks"

//nombre del contexto
export const TaskContext = createContext();
//componente que engloba
export function TaskContextProvider(props) {

const [tasks, setTasks] = useState([]);

function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: task.length,
            description: task.description
        }])

    }

function deleteTask(taskId) {
        // es diferente el id de la tarea al taskId que le están pasando?
        setTasks(tasks.filter(task => task.id != taskId))
    }

    //se ejecuta en el 1 render
    useEffect(() => {
        setTasks(data)
    }, [])

    return (

        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask
            }}
            >
            {props.children}
        </TaskContext.Provider>


    )
}
