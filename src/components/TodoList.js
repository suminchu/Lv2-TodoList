import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const TodoList = ({ todos, deleteTodo, toggleDone }) => {
    return (
        <TodoContainer>
            <h2>오늘 할일.. 🔥</h2>
            <ListWrapper>
                {todos
                    .filter((todo) => !todo.isDone)
                    .map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleDone={toggleDone}
                        />
                    ))}
            </ListWrapper>

            <h2>완료..! 🎉</h2>
            <ListWrapper>
                {todos
                    .filter((todo) => todo.isDone)
                    .map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleDone={toggleDone}
                        />
                    ))}
            </ListWrapper>
        </TodoContainer>
    );
};

export default TodoList;