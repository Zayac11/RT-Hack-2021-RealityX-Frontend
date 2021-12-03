import React, {useEffect, useState} from 'react';
import s from './Rubbish.module.scss'
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import ModalInfo from './ModalInfo/ModalInfo';
import {getCameras} from "../../../redux/rubbish-reducer";
import MapComponent from "./MapComponent/MapComponent";
import ReloadBtn from "./ReloadBtn/ReloadBtn";
import MapRouteBtn from './MapRouteBtn/MapRouteBtn';

const Rubbish = () => {
    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false);
    const [currentId, setCurrentId] = useState<number | null>(null);

    const cameras = useSelector((state: AppStateType) => state.rubbish.cameras)

    useEffect(() => {
        dispatch(getCameras())
    }, [])

    const handleClick = (uid: number) => {
        setCurrentId(uid)
        setVisible(true)
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
                                <ReloadBtn timestamp={'01.12.21, 13:09:31'} />
                                <MapRouteBtn />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <ModalInfo visible={visible} setVisible={setVisible} uid={currentId} />
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