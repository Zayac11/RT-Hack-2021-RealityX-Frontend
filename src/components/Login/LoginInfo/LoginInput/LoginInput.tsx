import React, {FC} from 'react';
import s from './LoginInput.module.scss'
import {useDispatch} from "react-redux";
import {authActions} from "../../../../redux/auth-reducer";

const LoginInput:FC<MyProps> = ({text, value, type, handleKeyUp, setValue, setIsEmpty}) => {
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        setIsEmpty(false)
        dispatch(authActions.setLoginError(false))
        setValue(value)
    }

    return (
        <label className={s.label}>
            {text}
            <input className={s.input} type={type} value={value} onChange={(e) => handleChange(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e.keyCode)}
            />
        </label>
    );
};

export default LoginInput;

type MyProps = {
    text: string,
    value: string,
    type: string,
    handleKeyUp: (buttonId: number) => void,
    setValue: (value: string) => void,
    setIsEmpty: (isEmpty: boolean) => void
}