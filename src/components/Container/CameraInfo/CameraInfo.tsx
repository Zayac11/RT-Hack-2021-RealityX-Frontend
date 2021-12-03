import React, {FC, useEffect, useState} from 'react'
import s from './CameraInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCamera} from "../../../redux/rubbish-reducer";
import {AppStateType} from "../../../redux/redux-store";
import CameraInfoContent from "./CameraInfoContent/CameraInfoContent";
import {useParams} from "react-router-dom";

const CameraInfo:FC = () => {
    const params = useParams()

    const dispatch = useDispatch()
    const [uid, setUid] = useState(Number(params.uid))
    const cameraData = useSelector((state: AppStateType) => state.rubbish.cameraData)

    useEffect(() => {
        if(uid !== null) {
            dispatch(getCurrentCamera(uid))
        }
    }, [uid, dispatch])

    return (
        <>
            <CameraInfoContent cameraData={cameraData} />
        </>
    );
}

export default CameraInfo