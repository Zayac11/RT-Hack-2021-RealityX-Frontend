import React, {FC, useEffect, useState} from 'react';
import s from './CameraGraph.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {CameraType} from "../../../../../types/Types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CameraGraph:FC = () => {
    const [numbers, setNumbers] = useState<Array<number>>([])
    const events = useSelector((state: AppStateType) => state.rubbish.events)

    useEffect(() => {
        setNumbers(events.map((item) => item.filled_containers_number))
    }, [events])

    const options = {
        responsive: false,
        plugins: {},
    };
    const labels = [];
    for (let i=1; i<31; i++) {
        labels.push(i)
    }
    const data = {
        labels,
        datasets: [
            {
                label: 'Наполненные контейнеры',
                data: numbers,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
            },
        ],
    };

    return (
        <>
            <Line className={s.graph} width={1360} height={300} options={options} data={data} />
        </>
    );
};

export default CameraGraph;
