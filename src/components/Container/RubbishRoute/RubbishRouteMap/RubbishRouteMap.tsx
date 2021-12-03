import React, {Ref, useCallback, useRef, useState} from 'react';
import {Map, YMaps} from "react-yandex-maps";
import s from "./RubbishRouteMap.module.scss";
import {getFilledCoordinates} from "../../../../utils/utils";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

const RubbishRouteMap = () => {
    const map = useRef<any>(null);
    const setMapRef = useCallback((instance: Ref<any>) => {
        map.current = instance;
    }, []);
    const mapState = {
        center: [54.901171, 52.297230],
        zoom: 12
    };

    const cameras = useSelector((state: AppStateType) => state.rubbish.cameras)

    const [start] = useState(localStorage.getItem('start') || '')
    const [end] = useState(localStorage.getItem('end') || '')

    const addRoute = (ymaps: any) => {
        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: getFilledCoordinates(cameras, start, end)
                ,
                params: {
                    routingMode: "auto"
                }
            },
            {
                boundsAutoApply: true
            }
        );
        console.log(multiRoute)
        map.current?.geoObjects.add(multiRoute);
    };

    return (
        <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_API_KEY || 'adcd12f1-d730-44e8-b757-a87de2b4b9db' }}>
            <Map
                className={s.map}
                modules={["multiRouter.MultiRoute"]}
                state={mapState}
                instanceRef={setMapRef}
                onLoad={addRoute}
            >

            </Map>
        </YMaps>
    );
};

export default RubbishRouteMap;