import React, {FC, useEffect} from 'react';
import s from './RubbishRoute.module.scss'
import {getCameras} from "../../../redux/rubbish-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {motion} from "framer-motion";
import RubbishRouteMap from "./RubbishRouteMap/RubbishRouteMap";
import {NavLink} from 'react-router-dom';
import {handleLogout} from "../../../utils/utils";
import logout from "../../../assets/images/logout.svg";

const RubbishRoute:FC = () => {
    const dispatch = useDispatch()
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)

    useEffect(() => {
        dispatch(getCameras())
    }, [dispatch])

    return (
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
                            <div className={s.current}>
                                ДЕТЕКЦИЯ МУСОРА
                            </div>
                            <NavLink className={s.link} to='/dogs'>
                                ДЕТЕКЦИЯ СОБАК
                            </NavLink>
                        </div>
                        <div onClick={() => handleLogout(dispatch)} className={s.logout}>
                            Выйти
                            <img src={logout} alt='logout' />
                        </div>
                    </div>
                    <motion.div className={s.mapContainer} variants={animationItem}>
                        {
                            !isFetch &&
                            <div>
                                <RubbishRouteMap />
                            </div>
                        }
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

export default RubbishRoute;

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