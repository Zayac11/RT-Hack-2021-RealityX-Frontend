import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from './Rubbish/Rubbish';
import RubbishRoute from "./RubbishRoute/RubbishRoute";

const Container:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/route' element={<RubbishRoute />}/>
                <Route path='/' element={<Rubbish />}/>
            </Routes>
        </>
    );
};

export default Container;