import React, { useState } from "react";


function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [todo, setTodo] = useState("")
    const [taskCount, setTaskCount] = useState(1)
    const [count , setCount] = useState(0)


    const addFunc = () => {
        const newTask = {
            id: taskCount,
            text: todo
        }
        setTaskCount(taskCount + 1)

        setTasks(tasks.concat(newTask))
        setTodo("")
        
    }
    
    const deleteTask = (id) => {
        let x = tasks.filter((task) => task.id !== id)

        setTasks(x)
    }


    return (
        <div className="todo">
            <h1>Add Your Tasks</h1>

            <div className="todos">
                <input 
                    type="text" 
                    name="task" 
                    onChange={(e) => setTodo(e.target.value)} 
                    value={todo}
                />
                <i className="fas fa-plus-circle" onClick={addFunc}></i>
            </div>

            <div className="taskContent">
                {tasks.map((t, index) => (
                    <div className="eachTask" key={index}>
                        <h4>{t.text}</h4>
                        <div className="counter">
                            <button onClick={() => setCount(count+1)}><i className="fas fa-plus"></i></button>
                            {count}
                            <button onClick={() => setCount(count-1)}><i className="fas fa-minus"></i></button>
                        </div>
                        <button onClick={() => deleteTask(t.id)} className="delete">Delete</button>
                    </div>
                ))}
            </div>

            
        </div>
    ) 
}

export default ToDoList