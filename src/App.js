import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
// package to create unique id's
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {
    const[todos, setTodos] = useState([])
    const todoNameRef = useRef()

    function handleAddTodo(e){
        const name = todoNameRef.current.value

        // if input is empty string it will not give back anything
        if (name === '') return;

        setTodos(previousTodos => {
            return [...previousTodos,{id: uuidv4(), name: name, complete: false}]
        })

        // input field will get emptied after input has been rendered
        todoNameRef.current.value = null
    }
    // effect that we need to load our todo once
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id){
        const newTodo = [...todos]
        const todo = newTodo.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodo)
    }

    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <>
            <TodoList className="todoList" todos={todos} toggleTodo = {toggleTodo}/>
            <input className="input" ref= {todoNameRef} type="text"/>
            <button className="button" onClick={handleAddTodo}>Add todo</button>
            <button className="button" onClick={handleClearTodos}>clear completed todos</button>
            <div className="leftToDo"> {todos.filter(todo => !todo.complete).length} left to do</div>
        </>
    )
}

export default App;
