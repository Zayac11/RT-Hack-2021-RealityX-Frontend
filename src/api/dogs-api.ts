import {APIResponseType, baseURL} from "./api";
import axios from "axios";
import {CameraType, DogsCameraType, DogsEventType, RubbishEventType} from "../types/Types";

export type GetDogsCamerasResponseType = {
    timestamp: string,
    cameras: Array<DogsCameraType>
}
export type GetCurrentDogsCameraResponseType = {
    camera: DogsCameraType,
    events: Array<DogsEventType>
}

export const dogsAPI = {
    getDogs() {
        return axios.get<APIResponseType<GetDogsCamerasResponseType>>(baseURL + `api/dogs/get_all_cameras`)
            .then(response => response.data)
    },
    updateDogs() {
        return axios.get<APIResponseType<GetDogsCamerasResponseType>>(baseURL + `api/dogs/update_cameras`)
            .then(response => response.data)
    },
    getCurrentDogCamera(id: number) {
        return axios.get<APIResponseType<GetCurrentDogsCameraResponseType>>(baseURL + `api/dogs/get_camera/${id}`)
            .then(response => response.data)
    },
}
