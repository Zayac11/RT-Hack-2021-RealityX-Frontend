import React, {FC, Ref, useCallback, useRef} from 'react';
import s from './RubbishRoute.module.scss'
import { YMaps, Map } from 'react-yandex-maps';


const RubbishRoute:FC = () => {
    const map = useRef<any>(null);
    const setMapRef = useCallback((instance: Ref<any>) => {
        map.current = instance;
    }, []);
    const mapState = {
        center: [55.796127, 49.106414],
        zoom: 12
    };

    const addRoute = (ymaps: any) => {
        const pointA = [55.749, 37.524];
        const pointB = "Москва, Красная площадь";

        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [
                    pointA,
                    pointB,
                ],
                params: {
                    routingMode: "auto"
                }
            },
            {
                boundsAutoApply: true
            }
        );
        map.current?.geoObjects.add(multiRoute);
    };

    console.log(process.env.REACT_APP_YANDEX_API_KEY)
    return (
        <>
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
        </>
    );
};

export default RubbishRoute;