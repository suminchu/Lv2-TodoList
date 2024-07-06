import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TodoDetail from '../pages/TodoDetail';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
    );
};

export default AppRoutes;