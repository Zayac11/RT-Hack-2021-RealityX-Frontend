import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {StatusCodesEnum} from "../api/api";
import {rubbishAPI} from "../api/rubbish-api";
import {CameraType, RubbishEventType} from "../types/Types";

export type InitialStateType = typeof initialState
let initialState = {
    timestamp: '' as string,
    cameras: [] as Array<CameraType>,
    cameraData: {} as CameraType,
    events: [] as Array<RubbishEventType>,
    isFetch: false as boolean,
}

const rubbishReducer = (state = initialState, action: RubbishActionsType):InitialStateType  => {
    switch (action.type) {
        case 'RT/RUBBISH/CAMERAS_RECEIVED':
            return {
                ...state,
                timestamp: action.payload.timestamp,
                cameras: action.payload.cameras,
            }
        case 'RT/RUBBISH/CURRENT_CAMERA_RECEIVED':
            return {
                ...state,
                cameraData: action.payload.camera,
                events: action.payload.events,
            }
        case 'RT/RUBBISH/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetch: action.payload.isFetch,
            }
        default:
            return state;
    }
}

export type RubbishActionsType = InferActionsTypes<typeof rubbishActions>

export const rubbishActions = {
    camerasReceived: (timestamp: string, cameras: Array<CameraType>) =>
        ({type: 'RT/RUBBISH/CAMERAS_RECEIVED', payload: {timestamp, cameras}} as const),
    currentCameraReceived: (camera: CameraType, events: Array<RubbishEventType>) =>
        ({type: 'RT/RUBBISH/CURRENT_CAMERA_RECEIVED', payload: {camera, events}} as const),
    toggleIsFetching: (isFetch: boolean) =>
        ({type: 'RT/RUBBISH/TOGGLE_IS_FETCHING', payload: {isFetch}} as const),

}

type ThunkType = BaseThunkType<RubbishActionsType>

export const getCameras = (): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await rubbishAPI.getCameras()
            console.log('getCameras', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(rubbishActions.camerasReceived(data.data.timestamp, data.data.cameras))
            }
            dispatch(rubbishActions.toggleIsFetching(false))
        }
        catch (e:any) {
            dispatch(rubbishActions.toggleIsFetching(false))
            alert('Some error')
            console.error('getCameras', e.config)
        }
    }
}
export const updateCameras = (): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await rubbishAPI.updateCameras()
            console.log('updateCameras', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(rubbishActions.camerasReceived(data.data.timestamp, data.data.cameras))
            }
            dispatch(rubbishActions.toggleIsFetching(false))
        }
        catch (e:any) {
            alert('Some error')
            console.error('updateCameras', e.config)
            dispatch(rubbishActions.toggleIsFetching(false))
        }
    }
}
export const getCurrentCamera = (cameraId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(rubbishActions.toggleIsFetching(true))
        try {
            let data = await rubbishAPI.getCurrentCamera(cameraId)
            console.log('getCurrentCamera', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(rubbishActions.currentCameraReceived(data.data.camera, data.data.events))
            }
            dispatch(rubbishActions.toggleIsFetching(false))

        }
        catch (e:any) {
            alert('Some error')
            console.error('getCurrentCamera', e.config)
            dispatch(rubbishActions.toggleIsFetching(false))

        }
    }
}

export default rubbishReducer;