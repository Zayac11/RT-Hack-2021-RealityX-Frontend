import React, {FC} from 'react';
import s from './MapComponent.module.scss'
import {Clusterer, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {CameraType} from "../../../../types/Types";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

const MapComponent:FC<MyProps> = ({cameras, handleClick}) => {
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)
    return (
        <div className={s.mapContainer}>
            <YMaps query={{ apikey: 'adcd12f1-d730-44e8-b757-a87de2b4b9db' }}>
                <Map className={s.map}
                     defaultState={{ center: [54.901171, 52.297230], zoom: 14 }} >
                    <Clusterer
                        options={{
                            preset: 'islands#blueClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {
                            (!isFetch &&
                            cameras?.length > 0) &&
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
        </div>
    );
};

export default MapComponent;

type MyProps = {
    cameras: Array<CameraType>,
    handleClick: (uid: number) => void
}