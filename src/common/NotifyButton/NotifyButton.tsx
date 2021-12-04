import React from 'react';
import s from './NotifyButton.module.scss'
import {toast} from "react-toastify";

const NotifyButton = () => {

    const notify = () => toast.success("Ваш отзыв принят");

    return (
        <>
            <div className={s.button} onClick={notify}>
                СООБЩИТЬ О ПРОБЛЕМЕ
            </div>

        </>
    );
};

export default NotifyButton;