import React, {FC} from 'react';
import s from './DogsCameraInfoItem.module.scss'

const DogsCameraInfoItem:FC<MyProps> = ({img, label, data, alt}) => {
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

export default DogsCameraInfoItem;

type MyProps = {
    img: string,
    label: string,
    alt: string,
    data: string,
}