import React, {useEffect, useState} from 'react';
import s from './Rubbish.module.scss'
import {Clusterer, Map, Placemark, YMaps, ZoomControl} from 'react-yandex-maps'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import ModalInfo from './ModalInfo/ModalInfo';
import {getCameras} from "../../../redux/rubbish-reducer";

const Rubbish = () => {
    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false);
    const [currentId, setCurrentId] = useState<number | null>(null);

    const cameras = useSelector((state: AppStateType) => state.rubbish.cameras)

    useEffect(() => {
        dispatch(getCameras())
    }, [])

    const handleClick = (uid: number) => {
        setCurrentId(uid)
        setVisible(true)
    }
    return (
        <>
            <YMaps query={{ apikey: 'adcd12f1-d730-44e8-b757-a87de2b4b9db' }}>
                <Map className={s.map}
                     defaultState={{ center: [55.796127, 49.106414], zoom: 16 }} >
                    <Clusterer
                        options={{
                            preset: 'islands#blueClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {
                            cameras?.length > 0 &&
                            cameras.map((item) => {
                                return (
                                    <Placemark key={item.uid} defaultGeometry={[Number(item.x_coordinate), Number(item.y_coordinate)]}
                                               onClick={() => handleClick(item.uid)}
                                               defaultOptions={{preset: item.is_filled ? "islands#redDotIcon" : "islands#darkGreenDotIcon",
                                                   iconColor: item.is_filled ? 'red' : 'darkGreen',
                                               }}
                                    />
                                )
                            })
                        }
                    </Clusterer>

                    <ZoomControl defaultOptions={{size: "small"}}/>

                </Map>
            </YMaps>
            <ModalInfo visible={visible} setVisible={setVisible} uid={currentId} />
        </>
    );
};

export default Rubbish;