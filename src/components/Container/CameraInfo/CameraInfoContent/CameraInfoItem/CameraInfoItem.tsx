import React, {FC} from 'react';
import s from './CameraInfoItem.module.scss'

const CameraInfoItem:FC<MyProps> = ({img, label, data, alt}) => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                {label}
                <img src={img} alt={alt} />
            </div>
            <div className={s.info}>
                {data}
            </div>
        </div>
    );
};

export default CameraInfoItem;

type MyProps = {
    img: string,
    label: string,
    alt: string,
    data: string,
}