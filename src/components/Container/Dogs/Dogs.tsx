import React, {useEffect} from 'react';
import s from './Dogs.module.scss'
import {motion} from "framer-motion";
import logout from '../../../assets/images/logout.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import DogsMapComponent from "./DogsMapComponent/DogsMapComponent";
import DogsReloadBtn from "./ReloadBtn/DogsReloadBtn";
import {NavLink, useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../utils/utils";
import {getDogsCameras, updateDogsCameras} from "../../../redux/dogs-reducer";

const Dogs = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const cameras = useSelector((state: AppStateType) => state.dogs.cameras)
    const timestamp = useSelector((state: AppStateType) => state.dogs.timestamp)
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)

    const handleUpdate = () => {
        dispatch(updateDogsCameras())
    }

    useEffect(() => {
        dispatch(getDogsCameras())
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
                            <div className={s.logout}>
                                Выйти
                                <img src={logout} alt='logout' />
                            </div>
                        </div>
                        <motion.div className={s.mapContainer} variants={animationItem}>
                            <h2 className={s.title}>Карта c расположением бездомных собак</h2>
                            <DogsMapComponent cameras={cameras} handleClick={handleClick} />
                            <div className={s.buttons}>
                                <DogsReloadBtn isFetch={isFetch} handleUpdate={handleUpdate} timestamp={getCurrentDate(timestamp)} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Dogs;

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