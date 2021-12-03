import React, {FC} from 'react';
import s from './CameraInfoContent.module.scss'
import {CameraType} from "../../../../types/Types";
import CameraInfoItem from './CameraInfoItem/CameraInfoItem';
import CameraGraph from './CameraGraph/CameraGraph';

const CameraInfoContent:FC<MyProps> = ({cameraData}) => {
    return (
        <div className={s.container}>
            {/*<div className={s.top}>*/}
            {/*    Последний снимок с Видеокамеры 1*/}
            {/*</div>*/}
            {/*<div className={s.content}>*/}
            {/*    <div className={s.info}>*/}
            {/*        <CameraInfoItem />*/}
            {/*    </div>*/}
            {/*    <div className={s.img}>*/}
            {/*        <img src={cameraData.last_img} alt='camera' />*/}
            {/*    </div>*/}
            {/*</div>*/}
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