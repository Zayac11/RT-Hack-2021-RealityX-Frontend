import React, {FC} from 'react';
import s from './CameraInfoContent.module.scss'
import {CameraType} from "../../../../types/Types";
import CameraInfoItem from './CameraInfoItem/CameraInfoItem';
import CameraGraph from './CameraGraph/CameraGraph';
import {NavLink} from "react-router-dom";
import point from '../../../../assets/images/camera_point.svg'
import time from '../../../../assets/images/camera_time.svg'
import loupe from '../../../../assets/images/camera_loupe.svg'
import arrow from '../../../../assets/images/back_arrow.png'
import {getCurrentDate} from "../../../../utils/utils";
import CameraInfoStatus from './CameraInfoStatus/CameraInfoStatus';
import NotifyButton from "../../../../common/NotifyButton/NotifyButton";

const CameraInfoContent:FC<MyProps> = ({cameraData}) => {
    return (
        <div className={s.container}>
            <div className={s.top}>
                <NavLink to='/' className={s.backBtn}>
                    <img src={arrow} alt='go back' />
                    Назад
                </NavLink>
                Данные с Видеокамеры {cameraData.uid}
            </div>
            <div className={s.content}>
                <div className={s.img}>
                    <img src={cameraData.last_img_pred} alt='camera' />
                </div>
                <div className={s.info}>
                    <div className={s.infoTop}>
                        Последний снимок
                    </div>
                    <div className={s.infoItems}>
                        <CameraInfoItem img={point} label={'Местоположение'} data={cameraData.address || ''} alt='Placemark' />
                        <CameraInfoItem img={time} label={'Время кадра'} data={getCurrentDate(cameraData.timestamp || '')} alt='Time' />
                        <CameraInfoStatus img={loupe} label={'Статус'} data={cameraData.is_filled || false} alt='Status' />
                    </div>
                    <NotifyButton />
                </div>
            </div>
            <div className={s.graph}>
                <CameraGraph />
            </div>
        </div>
    );
};

export default CameraInfoContent;

type MyProps = {
    cameraData: CameraType
}