import React from 'react';


function TaskList({tasks = [], onSelect=(task)=>{}, onFinalize=(task)=>{}}) {

    function isPendding(task) {
        return task.status === 'PENDING';
    }

    function FinalizeButton({task={}, onFinalize=(task)=>{}}) {
        return (
            <button onClick={() => {onFinalize(task)}}>Finalizar</button>
        );
    }
    
    function TaskItem({task={}, onSelect=(task)=>{}, onFinalize=(task)=>{}}) {
        return (
            <div>
                <span onClick={() => onSelect(task)}>{task.title}</span>
                {isPendding(task) && <FinalizeButton task={task} onFinalize={onFinalize} />}
            </div>
        );
    }
    
    return (
        <div>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <li key={index}>
                        <TaskItem task={task} onSelect={onSelect} onFinalize={onFinalize} />
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default TaskList;
