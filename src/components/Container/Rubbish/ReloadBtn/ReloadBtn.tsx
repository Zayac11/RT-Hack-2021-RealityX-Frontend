import React, {FC} from 'react';
import s from './ReloadBtn.module.scss'
import refresh from '../../../../assets/images/refresh.svg'
import cl from 'classnames'

const ReloadBtn:FC<MyProps> = ({timestamp, handleUpdate, isFetch}) => {

    const arr = [s.refreshImg, isFetch && s.fetch];

    return (
        <div onClick={() => handleUpdate()} className={s.container}>
            <div className={s.refresh}>
                ОБНОВИТЬ ДАННЫЕ
                <img className={cl(s.refreshImg, isFetch && s.fetch)} src={refresh} alt='refresh' />
            </div>
            <div className={s.time}>
                Последнее обновление: <span>{timestamp}</span>
            </div>
        </div>
    );
};

export default ReloadBtn;

type MyProps = {
    timestamp: string,
    handleUpdate: () => void,
    isFetch: boolean,
}