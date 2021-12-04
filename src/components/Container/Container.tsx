import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from './Rubbish/Rubbish';
import RubbishRoute from "./RubbishRoute/RubbishRoute";
import CameraInfo from "./CameraInfo/CameraInfo";
import Dogs from "./Dogs/Dogs";
import DogsCameraInfo from "./DogsCameraInfo/DogsCameraInfo";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const Container:FC = () => {
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    if(!isAuth) {
        window.location.href='/login'
    }
    return (
        <>
            <Routes>
                <Route path='/route' element={<RubbishRoute />}/>
                <Route path='/dogs' element={<Dogs />}/>
                <Route path='/dogs/camera/:uid' element={<DogsCameraInfo />}/>
                <Route path='/camera/:uid' element={<CameraInfo />}/>
                <Route path='/' element={<Rubbish />}/>
            </Routes>

        </>
    );
};

export default Container;