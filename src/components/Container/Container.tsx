import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from './Rubbish/Rubbish';
import RubbishRoute from "./RubbishRoute/RubbishRoute";
import CameraInfo from "./CameraInfo/CameraInfo";
import Dogs from "./Dogs/Dogs";

const Container:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/route' element={<RubbishRoute />}/>
                <Route path='/dogs' element={<Dogs />}/>
                <Route path='/camera/:uid' element={<CameraInfo />}/>
                <Route path='/' element={<Rubbish />}/>
            </Routes>
        </>
    );
};

export default Container;