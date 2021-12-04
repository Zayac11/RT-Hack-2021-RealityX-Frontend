import React, {FC, useEffect, useState} from 'react';
import s from './LoginInfo.module.scss'
import leaders from '../../../assets/images/leaders.svg'
import tatarstan from '../../../assets/images/tatarstan.svg'
import submit from '../../../assets/images/login_submit.svg'
import LoginInput from "./LoginInput/LoginInput";
import LoginError from "./LoginError/LoginError";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {login} from "../../../redux/auth-reducer";

const LoginInfo:FC = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const isLoginError = useSelector((state:AppStateType) => state.auth.isLoginError)

    useEffect(() => {
        setIsError(isLoginError)
    }, [isLoginError])

    const handleKeyUp = (buttonId: number) => {
        if(buttonId === 13) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if(password === '' || username === '') {
            setIsEmpty(true)
        }
        else {
            dispatch(login(username, password))
        }
    }


    return (
        <div className={s.info}>
            <img className={s.leaders} src={leaders} alt='leaders_of_digital' />
            <img className={s.tatarstan} src={tatarstan} alt='tatarstan' />
            <div className={s.title}>
                Войдите в систему
            </div>
            <div className={s.form}>
                <LoginInput setIsEmpty={setIsEmpty} setValue={setUsername} value={username} text='Логин' type='text' handleKeyUp={handleKeyUp} />
                <LoginInput setIsEmpty={setIsEmpty} setValue={setPassword} value={password} text='Пароль' type='password' handleKeyUp={handleKeyUp} />
                {
                    isError &&
                        <LoginError text='Неправильный логин или пароль' />
                }
                {
                    isEmpty &&
                        <LoginError text='Заполните все поля' />
                }
            </div>
            <div className={s.submitBtn} onClick={() => handleSubmit()}>
                <img src={submit} alt='submit' />
            </div>
            <div className={s.team}>
                Reality X
            </div>
        </div>
    );
};

export default LoginInfo;