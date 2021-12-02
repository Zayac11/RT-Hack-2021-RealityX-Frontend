import React from 'react';
import s from './Login.module.scss'
import LoginInfo from './LoginInfo/LoginInfo';
import back from '../../assets/images/login_back.png'

const Login = () => {
    return (
        <div className='outer'>
            <div className={s.container}>
                <div className={s.login}>
                    <div className={s.info}>
                        <LoginInfo />
                    </div>
                    <div className={s.photoContainer}>
                        <img className={s.photo} src={back} alt='city' />
                        <h1 className={s.title}>ANYSEARCH</h1>
                        <div className={s.subtitle}>Фокус на ваше благополучие</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;