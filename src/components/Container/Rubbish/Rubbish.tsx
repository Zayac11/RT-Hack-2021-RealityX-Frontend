import React, {useEffect, useState} from 'react';
import s from './Rubbish.module.scss'
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getCameras, updateCameras} from "../../../redux/rubbish-reducer";
import MapComponent from "./MapComponent/MapComponent";
import ReloadBtn from "./ReloadBtn/ReloadBtn";
import MapRouteBtn from './MapRouteBtn/MapRouteBtn';
import {useNavigate} from "react-router-dom";
import ModalAddress from "./ModalAddress/ModalAddress";

const Rubbish = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [visible, setVisible] = useState(false)

    const cameras = useSelector((state: AppStateType) => state.rubbish.cameras)
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)

    const handleUpdate = () => {
        dispatch(updateCameras())
    }

    useEffect(() => {
        dispatch(getCameras())
    }, [])

    const handleClick = (uid: number) => {
        navigation({
            pathname: 'camera/'+uid,
        });
    }
    return (
        <>
            <div className={s.outer}>
                <motion.div className={s.topOuter}
                            variants={animationContainer}
                            animate='visible'
                            initial='hidden'
                >
                    <div className={s.top}>
                        <div className={s.topInner}>
                            <div className={s.name}>
                                ANYSEARCH
                            </div>
                            <div className={s.logout}>
                                Выйти
                            </div>
                        </div>
                        <motion.div className={s.mapContainer} variants={animationItem}>
                            <h2 className={s.title}>Карта c расположением видеокамер</h2>
                            <MapComponent cameras={cameras} handleClick={handleClick} />
                            <div className={s.buttons}>
                                <ReloadBtn isFetch={isFetch} handleUpdate={handleUpdate} timestamp={'01.12.21, 13:09:31'} />
                                <MapRouteBtn setVisible={setVisible} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <ModalAddress visible={visible} setVisible={setVisible} />
        </>
    );
};

export default Rubbish;

const animationContainer = {
    hidden: {opacity: 1, scale: 1},
    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
        }
    }
}
const animationItem = {
    hidden: {x: 0, y: 50, opacity: 0},
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    }
}