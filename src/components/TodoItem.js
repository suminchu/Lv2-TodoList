import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Todo = styled.div`
    border: 3px solid #008080;
    border-radius: 12px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`;

const ButtonSet = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 12px;
    width: 88%;
    justify-content: end;
    padding: 12px;
    gap: 18px;
`;



const DeleteButton = styled.button`
    padding: 10px 40px;
    border: 2px solid red;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
    color: black;
`;

const CompleteButton = styled.button`
    padding: 10px 40px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
    color: black;
`;

const TodoItem = ({ todo, deleteTodo, toggleDone }) => {
    return (
        <Todo>
            <Link to={`/todo/${todo.id}`}>Detail</Link>
            <h3> {todo.title}</h3>
            <p>{todo.body}</p>
            <ButtonSet>
                <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
                <CompleteButton onClick={() => toggleDone(todo.id)}>
                    {todo.isDone ? 'Cancel' : 'Done'}
                </CompleteButton>
            </ButtonSet>
        </Todo>
    );
};

export default TodoItem;
