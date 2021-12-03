import React, {FC} from 'react';
import s from './DogsReloadBtn.module.scss'
import refresh from '../../../../assets/images/refresh.svg'
import cl from 'classnames'

const DogsReloadBtn:FC<MyProps> = ({timestamp, handleUpdate, isFetch}) => {

    return (
        <div className={s.container}>
            <div onClick={() => handleUpdate()} className={s.refresh}>
                ОБНОВИТЬ ДАННЫЕ
                <img className={cl(s.refreshImg, isFetch && s.fetch)} src={refresh} alt='refresh' />
            </div>
            <div className={s.time}>
                Последнее обновление: <span>{timestamp}</span>
            </div>
        </div>
    );
};

export default DogsReloadBtn;

type MyProps = {
    timestamp: string,
    handleUpdate: () => void,
    isFetch: boolean,
}