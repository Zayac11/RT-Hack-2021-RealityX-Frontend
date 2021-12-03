import React, {FC, Ref, useCallback, useEffect, useRef, useState} from 'react';
import s from './RubbishRoute.module.scss'
import { YMaps, Map } from 'react-yandex-maps';
import {getCameras} from "../../../redux/rubbish-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getFilledCoordinates} from "../../../utils/utils";


const RubbishRoute:FC = () => {
    const dispatch = useDispatch()
    const map = useRef<any>(null);
    const setMapRef = useCallback((instance: Ref<any>) => {
        map.current = instance;
    }, []);
    const mapState = {
        center: [54.901171, 52.297230],
        zoom: 12
    };

    const cameras = useSelector((state: AppStateType) => state.rubbish.cameras)
    const isFetch = useSelector((state: AppStateType) => state.rubbish.isFetch)

    useEffect(() => {
        dispatch(getCameras())
    }, [dispatch])

    const [start, setStart] = useState(localStorage.getItem('start') || '')
    const [end, setEnd] = useState(localStorage.getItem('end') || '')


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
        <>
            {
                !isFetch &&
                <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_API_KEY }}>
                    <Map
                        className={s.map}
                        modules={["multiRouter.MultiRoute"]}
                        state={mapState}
                        instanceRef={setMapRef}
                        onLoad={addRoute}
                    >

                    </Map>
                </YMaps>
            }
        </>
    );
};

export default RubbishRoute;