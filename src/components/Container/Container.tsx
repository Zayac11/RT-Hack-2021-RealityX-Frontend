import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from './Rubbish/Rubbish';
import RubbishRoute from "./RubbishRoute/RubbishRoute";

const Container:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/rubbish' element={<Rubbish />}/>
                <Route path='/rubbish/route' element={<RubbishRoute />}/>
            </Routes>
        </>
    );
};

export default Container;