import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border: 1px solid #ddd;
    margin-bottom: 24px;
`;

const Header = () => {
    return <HeaderWrapper><h2>My Todo List📝</h2></HeaderWrapper>;
};

export default Header;
