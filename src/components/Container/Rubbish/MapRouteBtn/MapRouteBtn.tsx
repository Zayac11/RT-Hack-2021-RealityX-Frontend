import React from 'react';
import s from './MapRouteBtn.module.scss'
import point from "../../../../assets/images/map_point.svg";

const MapRouteBtn = () => {
    return (
        <div className={s.container}>
            ПОСТРОИТЬ МАРШРУТ
            <img src={point} alt='point' />
        </div>
    );
};

export default MapRouteBtn;