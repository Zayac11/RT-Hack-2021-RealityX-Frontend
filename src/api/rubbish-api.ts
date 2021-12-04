import {APIResponseType, baseURL} from "./api";
import axios from "axios";
import {CameraType, RubbishEventType} from "../types/Types";

export type GetCamerasResponseType = {
    timestamp: string,
    cameras: Array<CameraType>
}
export type GetCurrentCameraResponseType = {
    camera: CameraType,
    events: Array<RubbishEventType>
}

const AuthStr = 'Bearer ' + localStorage.getItem('accessToken');

export const rubbishAPI = {
    getCameras() {
        return axios.get<APIResponseType<GetCamerasResponseType>>(baseURL + `api/trash/get_all_cameras`, { headers: { Authorization: AuthStr } })
            .then(response => response.data)
    },
    updateCameras() {
        return axios.get<APIResponseType<GetCamerasResponseType>>(baseURL + `api/trash/update_cameras`, { headers: { Authorization: AuthStr } })
            .then(response => response.data)
    },
    getCurrentCamera(id: number) {
        return axios.get<APIResponseType<GetCurrentCameraResponseType>>(baseURL + `api/trash/get_camera/${id}`, { headers: { Authorization: AuthStr } })
            .then(response => response.data)
    },
}
