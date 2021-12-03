import React, {FC} from 'react';
import s from './DogsCameraInfoContent.module.scss'
import {CameraType, DogsCameraType} from "../../../../types/Types";
import DogsCameraInfoItem from './DogsCameraInfoItem/DogsCameraInfoItem';
import DogsCameraGraph from './CameraGraph/DogsCameraGraph';
import {NavLink} from "react-router-dom";
import point from '../../../../assets/images/camera_point.svg'
import time from '../../../../assets/images/camera_time.svg'
import loupe from '../../../../assets/images/camera_loupe.svg'
import arrow from '../../../../assets/images/back_arrow.png'
import {getCurrentDate} from "../../../../utils/utils";
import DogsCameraInfoStatus from './DogsCameraInfoStatus/DogsCameraInfoStatus';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

const DogsCameraInfoContent:FC<MyProps> = ({cameraData}) => {
    const events = useSelector((state: AppStateType) => state.dogs.events)
    return (
        <div className={s.container}>
            <div className={s.top}>
                <NavLink to='/dogs' className={s.backBtn}>
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
                        <DogsCameraInfoItem img={point} label={'Местоположение'} data={cameraData.address || ''} alt='Placemark' />
                        <DogsCameraInfoItem img={time} label={'Время кадра'} data={getCurrentDate(cameraData.timestamp || '')} alt='Time' />
                        <DogsCameraInfoStatus img={loupe} label={'Статус'} data={
                            (events.length > 0 &&
                            events[0].dog_number > 2) || false
                        } alt='Status' />
                    </div>
                </div>
            </div>
            <div className={s.graph}>
                <DogsCameraGraph />
            </div>
        </div>
    );
};

export default DogsCameraInfoContent;

type MyProps = {
    cameraData: DogsCameraType
}