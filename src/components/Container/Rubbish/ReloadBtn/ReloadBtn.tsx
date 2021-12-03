import React, {FC} from 'react';
import s from './ReloadBtn.module.scss'
import refresh from '../../../../assets/images/refresh.svg'

const ReloadBtn:FC<MyProps> = ({timestamp}) => {
    return (
        <div className={s.container}>
            <div className={s.refresh}>
                ОБНОВИТЬ ДАННЫЕ
                <img src={refresh} alt='refresh' />
            </div>
            <div className={s.time}>
                Последнее обновление: <span>{timestamp}</span>
            </div>
        </div>
    );
};

export default ReloadBtn;

type MyProps = {
    timestamp: string
}