import React from 'react';


export default function Todo ({ todo, toggleTodo })
{
    function handleTOdoClick(){
        toggleTodo(todo.id)
    }
    return(
        <div>
            <label className='todoList'>
                <input type="checkbox" checked={todo.complete} onChange = {handleTOdoClick} />
                {todo.name}
            </label>

        </div>
    )
}