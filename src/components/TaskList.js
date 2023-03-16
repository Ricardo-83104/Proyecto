import { useEffect, useState, createContext } from "react";
import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext';
import {useContext} from 'react';


function TaskList() {

const {tasks}= useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-2xl font-bold text-black mb-3">no hay tareas</h1>
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {tasks.map((task) => (
                <TaskCard Key={task.id} task={task} 
             />
            ))}
        </div>
    )

}
export default TaskList

