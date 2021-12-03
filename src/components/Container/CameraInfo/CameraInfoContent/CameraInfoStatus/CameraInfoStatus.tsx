import React, {FC} from 'react';
import s from './CameraInfoStatus.module.scss'
import green from '.././../../../../assets/images/green_circle.svg'
import red from '.././../../../../assets/images/red_circle.svg'

const CameraInfoStatus:FC<MyProps> = ({img, label, data, alt}) => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                {label}
                <img src={img} alt={alt} />
            </div>
            <div className={s.info}>
                {
                    !data
                    ?
                        <>
                            Вывоз не требуется
                            <img src={green} alt='green circle' />
                        </>
                    :
                        <>
                            Требуется вывоз
                            <img src={red} alt='red circle' />
                        </>
                }
            </div>
        </div>
    );
};

export default CameraInfoStatus;

type MyProps = {
    img: string,
    label: string,
    alt: string,
    data: boolean,
}