import React, { useState } from "react";


function ToDoList() {

    const [count , setCount]=useState(0)
    return (
        <div className="todo">
            <h1>Add Your Tasks</h1>

            <div>
                <input type="text" name="tasks" />
                <input type="submit" name="submit" />
            </div>

            <div>
                <button onClick={() => setCount(count+1)}>+</button>
                {count}
                <button onClick={() => setCount(count-1)}>-</button>
            </div>
            
        </div>
    ) 
}

export default ToDoList