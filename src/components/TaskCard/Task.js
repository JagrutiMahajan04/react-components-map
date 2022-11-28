import React from 'react'
import "../TaskCard/Task.css"

function TaskCard({title,deadline}){
    return(
        <div className='task-container'>
         <h1>{title}</h1>
          <h1>{deadline}</h1>
        </div>
    )
}

export default TaskCard