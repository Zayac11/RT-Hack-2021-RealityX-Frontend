import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {StatusCodesEnum} from "../api/api";
import {rubbishAPI} from "../api/rubbish-api";
import {CameraType, DogsCameraType, DogsEventType, RubbishEventType} from "../types/Types";
import {rubbishActions, RubbishActionsType} from "./rubbish-reducer";
import {dogsAPI} from "../api/dogs-api";
import {authActions, AuthActionsType} from "./auth-reducer";

export type InitialStateType = typeof initialState
let initialState = {
    timestamp: '' as string,
    cameras: [] as Array<DogsCameraType>,
    cameraData: {} as DogsCameraType,
    events: [] as Array<DogsEventType>,
}

const dogsReducer = (state = initialState, action: DogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'RT/DOGS/CAMERAS_RECEIVED':
            return {
                ...state,
                timestamp: action.payload.timestamp,
                cameras: action.payload.cameras,
            }
        case 'RT/DOGS/CURRENT_CAMERA_RECEIVED':
            return {
                ...state,
                cameraData: action.payload.camera,
                events: action.payload.events,
            }

        default:
            return state;
    }
}

export type DogsActionsType = InferActionsTypes<typeof dogsActions>

export const dogsActions = {
    camerasReceived: (timestamp: string, cameras: Array<DogsCameraType>) =>
        ({type: 'RT/DOGS/CAMERAS_RECEIVED', payload: {timestamp, cameras}} as const),
    currentCameraReceived: (camera: DogsCameraType, events: Array<DogsEventType>) =>
        ({type: 'RT/DOGS/CURRENT_CAMERA_RECEIVED', payload: {camera, events}} as const),

}

type ThunkType = BaseThunkType<DogsActionsType | RubbishActionsType | AuthActionsType>

export const getDogsCameras = (): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await dogsAPI.getDogs()
            console.log('getDogsCameras', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(dogsActions.camerasReceived(data.data.timestamp, data.data.cameras))
            }
            else if (data.status === StatusCodesEnum.Forbidden) {
                localStorage.removeItem('accessToken')
                dispatch(authActions.logout())
            }
            else {
                throw new Error()
            }
            dispatch(rubbishActions.toggleIsFetching(false))
        }
        catch (e:any) {
            dispatch(rubbishActions.toggleIsFetching(false))
            alert('Some error')
            console.error('getDogsCameras', e.config)
        }
    }
}
export const updateDogsCameras = (): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await dogsAPI.updateDogs()
            console.log('updateDogsCameras', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(dogsActions.camerasReceived(data.data.timestamp, data.data.cameras))
            }
            else if (data.status === StatusCodesEnum.Forbidden) {
                localStorage.removeItem('accessToken')
                dispatch(authActions.logout())
            }
            else {
                throw new Error()
            }
            dispatch(rubbishActions.toggleIsFetching(false))
        }
        catch (e:any) {
            alert('Some error')
            console.error('updateDogsCameras', e.config)
            dispatch(rubbishActions.toggleIsFetching(false))
        }
    }
}
export const getDogsCurrentCamera = (cameraId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await dogsAPI.getCurrentDogCamera(cameraId)
            console.log('getCurrentDogsCamera', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(dogsActions.currentCameraReceived(data.data.camera, data.data.events))
            }
            else if (data.status === StatusCodesEnum.Forbidden) {
                localStorage.removeItem('accessToken')
                dispatch(authActions.logout())
            }
            else {
                throw new Error()
            }
            dispatch(rubbishActions.toggleIsFetching(false))

        }
        catch (e:any) {
            alert('Some error')
            console.error('getCurrentDogsCamera', e.config)
            dispatch(rubbishActions.toggleIsFetching(false))
        }
    }
}

export default dogsReducer;