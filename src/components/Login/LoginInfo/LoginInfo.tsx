import React, {FC, useState} from 'react';
import s from './LoginInfo.module.scss'
import leaders from '../../../assets/images/leaders.svg'
import tatarstan from '../../../assets/images/tatarstan.svg'
import submit from '../../../assets/images/login_submit.svg'
import LoginInput from "./LoginInput/LoginInput";
import LoginError from "./LoginError/LoginError";

const LoginInfo:FC = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const handleKeyUp = (buttonId: number) => {
        if(buttonId === 13) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if(password === '' || login === '') {
            setIsEmpty(true)
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
                <LoginInput setIsEmpty={setIsEmpty} setIsError={setIsError} setValue={setLogin} value={login} text='Логин' type='text' handleKeyUp={handleKeyUp} />
                <LoginInput setIsEmpty={setIsEmpty} setIsError={setIsError} setValue={setPassword} value={password} text='Пароль' type='password' handleKeyUp={handleKeyUp} />
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