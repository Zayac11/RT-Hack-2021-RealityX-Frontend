import React, {FC, useEffect, useState} from 'react'
import s from './DogsCameraInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCamera} from "../../../redux/rubbish-reducer";
import {AppStateType} from "../../../redux/redux-store";
import DogsCameraInfoContent from "./DogsCameraInfoContent/DogsCameraInfoContent";
import {NavLink, useParams} from "react-router-dom";
import logout from "../../../assets/images/logout.svg";
import {getDogsCurrentCamera} from "../../../redux/dogs-reducer";
import {handleLogout} from "../../../utils/utils";

const DogsCameraInfo:FC = () => {
    const params = useParams()

    const dispatch = useDispatch()
    const [uid] = useState(Number(params.uid))
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)
    const cameraData = useSelector((state: AppStateType) => state.dogs.cameraData)

    useEffect(() => {
        if(uid !== null) {
            dispatch(getDogsCurrentCamera(uid))
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
                            <NavLink to='/' className={s.link}>
                                ДЕТЕКЦИЯ МУСОРА
                            </NavLink>
                            <div className={s.current}>
                                ДЕТЕКЦИЯ СОБАК
                            </div>
                        </div>
                        <div onClick={() => handleLogout(dispatch)} className={s.logout}>
                            Выйти
                            <img src={logout} alt='logout' />
                        </div>
                    </div>
                </div>
            </div>
            {
                !isFetch &&
                <DogsCameraInfoContent cameraData={cameraData} />
            }
        </div>
    );
}

export default DogsCameraInfo