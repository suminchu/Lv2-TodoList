import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import Header from '../components/Header';
import { addTodo, deleteTodo, toggleTodo } from '../redux/modules/todos';

const HomeContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Home = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const addTodoHandler = (title, body) => {
        dispatch(addTodo({ id: Date.now(), title, body, isDone: false }));
    };

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const toggleDoneHandler = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <HomeContainer>
            <Header/>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList 
                todos={todos} 
                deleteTodo={deleteTodoHandler} 
                toggleDone={toggleDoneHandler} 
            />
        </HomeContainer>
    );
};

export default Home;