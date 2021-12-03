import React, {FC} from 'react';
import s from './DogsCameraInfoStatus.module.scss'
import green from '.././../../../../assets/images/green_circle.svg'
import red from '.././../../../../assets/images/red_circle.svg'

const DogsCameraInfoStatus:FC<MyProps> = ({img, label, data, alt}) => {

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
                            Скопление собак не обнаружено
                            <img src={green} alt='green circle' />
                        </>
                    :
                        <>
                            Обнаружена скопление собак
                            <img src={red} alt='red circle' />
                        </>
                }
            </div>
        </div>
    );
};

export default DogsCameraInfoStatus;

type MyProps = {
    img: string,
    label: string,
    alt: string,
    data: boolean,
}