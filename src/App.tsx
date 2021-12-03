import React from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import './common/style.scss';
import {Route, Routes} from 'react-router-dom'
import Container from "./components/Container/Container";
import Login from './components/Login/Login';

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Container />} />
        </Routes>
    )
}

export default App;
