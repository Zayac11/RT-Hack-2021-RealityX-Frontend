import {CameraType} from "../types/Types";

export const getCurrentDate = (timestamp: string) => {
    let date = new Date(timestamp)
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return mm + '.' + dd + '.' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds
}

export const getFilledCoordinates = (cameras: Array<CameraType>, start: string, end: string) => {
    let filledCoordinatesItems = []
    let filledCoordinates = []
    filledCoordinatesItems = cameras.filter((item) => item.is_filled)
    filledCoordinates = filledCoordinatesItems.map((item) => [Number(item.x_coordinate), Number(item.y_coordinate)])
    console.log([start, ...filledCoordinates, end])
    return [start, ...filledCoordinates, end]
}