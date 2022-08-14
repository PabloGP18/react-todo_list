import React, { useState, useRef} from 'react';
import TodoList from './TodoList';

function App() {
    const[todos, setTodos] = useState([])
    const todoNameRef = useRef()

    function handleAddTodo(e){
        const name = todoNameRef.current.value

        // if input is empty string it will not give back anything
        if (name === '') return;

        setTodos(previousTodos => {
            return [...previousTodos,{id: 1, name: name, complete: false}]
        })

        // input field will get emptied after input has been rendered
        todoNameRef.current.value = null
    }
    return (
        <>
            <TodoList todos={todos} setTodos={setTodos}/>
            <input ref= {todoNameRef} type="text"/>
            <button onClick={handleAddTodo}>Add todo</button>
            <button>clear completed todos</button>
            <div>0 left to do</div>
        </>
    )
}

export default App;
