import React, { useState} from 'react';
import TodoList from './TodoList';

function App() {
    const[todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
    return (
        <>
            <TodoList todos={todos} setTodos={setTodos}/>
            <input type="text"/>
            <button>Add todo</button>
            <button>clear completed todos</button>
            <div>0 left to do</div>
        </>
    )
}

export default App;
