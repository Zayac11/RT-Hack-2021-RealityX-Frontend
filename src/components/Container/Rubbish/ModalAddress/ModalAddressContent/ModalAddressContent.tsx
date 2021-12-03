import React, {FC, useState} from 'react';
import AddressItem from './AddressItem/AddressItem';
import s from './ModalAddressContent.module.scss'
import cl from 'classnames'
import {NavLink} from "react-router-dom";

const ModalAddressContent:FC<MyProps> = ({setVisible}) => {

    const [start, setStart] = useState(localStorage.getItem('start') || '')
    const [end, setEnd] = useState(localStorage.getItem('end') || '')

    return (
        <div className={s.container}>
            <div className={s.title}>
                Выберите маршрут
            </div>
            <AddressItem type={'start'} value={start} handleChange={setStart} text='Начало маршрута' />
            <AddressItem type={'end'} value={end} handleChange={setEnd} text='Конец маршрута' />
            {
                (start !== '' && end !== '') ?
                    <NavLink to={'/route'} className={cl(s.button, s.confirm)}>
                        Рассчитать
                    </NavLink>
                    :
                    <div className={cl(s.button, s.confirm)}>
                        Рассчитать
                    </div>
            }

            <div onClick={() => setVisible(false)} className={cl(s.button, s.reject)}>
                Отменить
            </div>
        </div>
    );
};

export default ModalAddressContent;

type MyProps = {
    setVisible: (isVisible: boolean) => void
}