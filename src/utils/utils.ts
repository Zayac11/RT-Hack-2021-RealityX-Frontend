import {CameraType} from "../types/Types";
import {authActions} from "../redux/auth-reducer";
import {toast} from "react-toastify";

export const getCurrentDate = (timestamp: string) => {
    let date = new Date(timestamp)
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    let hour = date.getHours();
    let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    let seconds = (date.getSeconds()<10?'0':'') + date.getSeconds();

    return mm + '.' + dd + '.' + yyyy + '  '  + hour + ':' + minutes + ':' + seconds
}

export const getFilledCoordinates = (cameras: Array<CameraType>, start: string, end: string) => {
    let filledCoordinatesItems = []
    let filledCoordinates = []
    filledCoordinatesItems = cameras.filter((item) => item.is_filled)
    filledCoordinates = filledCoordinatesItems.map((item) => [Number(item.x_coordinate), Number(item.y_coordinate)])
    console.log([start, ...filledCoordinates, end])
    return [start, ...filledCoordinates, end]
}
export const handleLogout = (dispatch: any) => {
    localStorage.removeItem('accessToken')
    dispatch(authActions.logout())
}