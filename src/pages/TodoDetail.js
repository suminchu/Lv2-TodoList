import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin:0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    border: 2px solid #008080;
    border-radius: 5px;
// 화면 중앙에 배치
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

const Button = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 120px;
    margin-top: 20px;
`;

const TodoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const todo = useSelector(state => state.todos.find(todo => todo.id.toString() === id));

    if (!todo) {
        return <DetailContainer>"Todo" not found. ID: {id}</DetailContainer>;
    }

    return (
        <DetailContainer>
            <h1>˗ˏˋ ♡ ˎˊ˗</h1>
            <p>ID - {todo.id}</p>
            <h2>Title : {todo.title}</h2>
            <p><b>Content :</b> {todo.body}</p>
            <Button onClick={() => navigate('/')}>Back</Button>
        </DetailContainer>
    );
};  

export default TodoDetail;