import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Rubbish from "./Rubbish/Rubbish";

const Container:FC = () => {
    return (
        <>
            <Routes>
                <Route path='/rubbish/*' element={<Rubbish />}/>
            </Routes>
        </>
    );
};

export default Container;