import React, {FC, useEffect, useState} from 'react'
import s from './CameraInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCamera} from "../../../redux/rubbish-reducer";
import {AppStateType} from "../../../redux/redux-store";
import CameraInfoContent from "./CameraInfoContent/CameraInfoContent";
import {NavLink, useParams} from "react-router-dom";
import logout from "../../../assets/images/logout.svg";

const CameraInfo:FC = () => {
    const params = useParams()

    const dispatch = useDispatch()
    const [uid, setUid] = useState(Number(params.uid))
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)
    const cameraData = useSelector((state: AppStateType) => state.rubbish.cameraData)

    useEffect(() => {
        if(uid !== null) {
            dispatch(getCurrentCamera(uid))
        }
    }, [uid, dispatch])

    return (
        <div className={s.outer}>
            <div className={s.topOuter}>
                <div className={s.top}>
                    <div className={s.topInner}>
                        <NavLink to='/' className={s.name}>
                            SAFECITY
                        </NavLink>
                        <div className={s.links}>
                            <div className={s.current}>
                                ДЕТЕКЦИЯ МУСОРА
                            </div>
                            <NavLink className={s.link} to='/'>
                                ДЕТЕКЦИЯ СОБАК
                            </NavLink>
                        </div>
                        <div className={s.logout}>
                            Выйти
                            <img src={logout} alt='logout' />
                        </div>
                    </div>
                </div>
            </div>
            {
                !isFetch &&
                <CameraInfoContent cameraData={cameraData} />
            }
        </div>
    );
}

export default CameraInfo