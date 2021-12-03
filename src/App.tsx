import React, {useEffect} from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import './common/style.scss';
import {Route, Routes} from 'react-router-dom'
import Container from "./components/Container/Container";
import Login from './components/Login/Login';
import Preloader from "./common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {authActions} from "./redux/auth-reducer";

const App = () => {
    const dispatch = useDispatch()
    const isInitialize = useSelector((state: AppStateType) => state.auth.isInitialize)

    useEffect(() => {
        if(localStorage.getItem('accessToken')) {
            dispatch(authActions.login(true))
        }
        dispatch(authActions.setInitialize(true))
    }, [dispatch])

    if(!isInitialize) {
        return <Preloader />
    }

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Container />} />
        </Routes>
    )
}

export default App;
