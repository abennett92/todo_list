import React, {useState} from 'react';
import './Form.module.css';

const Form = (props) => {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (e) => {
        e.preventDefault();

        if (newTodo.length === 0) {
            return;
        }

        const todoItem = {
            text: newTodo,
            complete: false
        };

        setTodos([...todos, todoItem]);
        setNewTodo("");
    }



    const handleTodoDelete = (deleteIndex) => {
        const filterTodos = todos.filter((_todo, i) => {
            return i !== deleteIndex;
        })

        setTodos(filterTodos);
    }

    const todoToggle = (idx) => {

        const updateTodos = todos.map((todo, i) => {
            if (idx === i) {
                todo.complete = ! todo.complete;
            }

            return todo;
        })

        setTodos(updateTodos);
    }

    return (
        <div>
            <h1>This is my form</h1>
            <form onSubmit={(e) => {handleNewTodo(e);}} >
                <input onChange={(e) => {setNewTodo(e.target.value)}} type="text" value={newTodo} />
                <div>
                    <button>Add</button>
                </div>
            </form>

            <hr />

            {todos.map((todo, i) => {
                
                return (
                    <div key={i}>
                        <input onChange={(e) => {todoToggle(i)}} checked={todo.complete} type="checkbox" />
                        <span style={{ textDecoration: todo.complete && 'line-through' }} >{todo.text}</span>
                        <button style={{marginLeft: "15px"}} onClick={(e) => {handleTodoDelete(i)}} >Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Form;

