import React, {useEffect} from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import './common/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from 'react-router-dom'
import Container from "./components/Container/Container";
import Login from './components/Login/Login';
import Preloader from "./common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {authActions} from "./redux/auth-reducer";
import { ToastContainer } from 'react-toastify';

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
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Container />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default App;
