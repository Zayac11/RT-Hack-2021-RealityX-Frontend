import React, {FC, Ref, useCallback, useRef} from 'react';
import s from './Rubbish.module.scss'
import { YMaps, Map } from 'react-yandex-maps';


const Rubbish:FC = () => {
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
        const pointC = "Москва, метро Люблино";
        const point4 = "Москва, метро Алтуфьево";
        const point5 = "Москва, метро Отрадное";
        const point6 = "Москва, метро Бибирево";
        const point7 = "Москва, метро Менделеевская";
        const point8 = "Москва, метро Фили";
        const point9 = "Москва, метро Юго-западная";
        const point10 = "Москва, метро Юго-восточная";
        const point11 = "Москва, метро Кунцевская";
        const point12 = "Москва, метро Выхино";
        const point13 = "Москва, метро Жулебино";
        const point14 = "Москва, метро Митино";
        const point15 = "Москва, метро Мякинино";
        const point16 = "Москва, метро Кропоткинская";

        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [
                    pointA,
                    pointB,
                    pointC,
                    point4,
                    point5,
                    point6,
                    point7,
                    point8,
                    point9,
                    point10,
                    point11,
                    point12,
                    point13,
                    point14,
                    point15,
                    point16,
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

export default Rubbish;