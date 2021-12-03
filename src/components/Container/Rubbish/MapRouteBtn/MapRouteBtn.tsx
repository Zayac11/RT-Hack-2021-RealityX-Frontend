import React, {FC} from 'react';
import s from './MapRouteBtn.module.scss'
import point from "../../../../assets/images/map_point.svg";

const MapRouteBtn:FC<{setVisible: (isVisible: boolean) => void}> = ({setVisible}) => {
    return (
        <div onClick={() => setVisible(true)} className={s.container}>
            ПОСТРОИТЬ МАРШРУТ
            <img src={point} alt='point' />
        </div>
    );
};

export default MapRouteBtn;