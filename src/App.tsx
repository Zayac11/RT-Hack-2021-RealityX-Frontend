import React from 'react';
import './App.scss';
import './common/style.scss';
import {Route, Routes} from 'react-router-dom'
import Container from "./components/Container/Container";
import Login from './components/Login/Login';

const App = () => {
    return (
        <Routes>
            <Route path='/*' element={<Container />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App;
