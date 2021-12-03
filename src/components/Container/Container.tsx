import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from './Rubbish/Rubbish';
import RubbishRoute from "./RubbishRoute/RubbishRoute";
import CameraInfo from "./CameraInfo/CameraInfo";

const Container:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/route' element={<RubbishRoute />}/>
                <Route path='/camera/:uid' element={<CameraInfo />}/>
                <Route path='/' element={<Rubbish />}/>
            </Routes>
        </>
    );
};

export default Container;