import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.form`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px;
    background-color: #eee;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #008080;
    font-weight: 700;
`;

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState({ title: '', body: '' });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (input.title && input.body) {
            addTodo(input.title, input.body);
            setInput({ title: '', body: '' });
        }
    };

    return (
        <InputContainer onSubmit={onSubmitHandler}>
            <label htmlFor="title"><b>Title</b></label>
            <Input
                type="text"
                id="title"
                name="title"
                value={input.title}
                onChange={onChangeHandler}
            />
            <label htmlFor="body"><b>Content</b></label>
            <Input
                type="text"
                id="body"
                name="body"
                value={input.body}
                onChange={onChangeHandler}
            />
            <Button type="submit">Add</Button>
        </InputContainer>
    );
};

export default TodoForm;
