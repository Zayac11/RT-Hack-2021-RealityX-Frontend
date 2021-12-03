import React from 'react';
import s from './Login.module.scss'
import LoginInfo from './LoginInfo/LoginInfo';
import {motion} from "framer-motion";
import back from '../../assets/images/login_back.png'

const Login = () => {

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

    return (
        <motion.div className='outer'
                    variants={animationContainer}
                    animate='visible'
                    initial='hidden'
        >
            <motion.div className={s.container} variants={animationItem}>
                <div className={s.login}>
                    <div className={s.info}>
                        <LoginInfo />
                    </div>
                    <div className={s.photoContainer}>
                        <img className={s.photo} src={back} alt='city' />
                        <h1 className={s.title}>SAFECITY</h1>
                        <div className={s.subtitle}>Фокус на ваше благополучие</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Login;