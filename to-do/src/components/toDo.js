import React, { useState } from "react";


function ToDoList() {

    
    return (
        <div className="todo">
            <h1>Add Your Tasks</h1>

            <div>
                <input type="text" name="tasks" />
                <input type="submit" name="submit" />
            </div>
            
        </div>
    ) 
}

export default ToDoList