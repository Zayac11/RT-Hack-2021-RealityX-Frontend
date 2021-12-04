import React, {FC} from 'react';
import s from './DogsMapComponent.module.scss'
import {Clusterer, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {CameraType, DogsCameraType} from "../../../../types/Types";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

const DogsMapComponent:FC<MyProps> = ({cameras, handleClick}) => {
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)
    return (
        <div className={s.mapContainer}>
            <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_API_KEY || '51294c2c-8c0b-4b35-b734-ea5700b611ec' }}>
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
                                               defaultProperties={{iconCaption: String(item.number_of_dogs)}}
                                               onClick={() => handleClick(item.uid)}
                                               defaultOptions={{preset: item.number_of_dogs > 2 ? "islands#redDotIcon" : "islands#greenDotIcon",
                                                   iconColor: item.number_of_dogs > 2 ? "red" : "green",
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

export default DogsMapComponent;

type MyProps = {
    cameras: Array<DogsCameraType>,
    handleClick: (uid: number) => void
}