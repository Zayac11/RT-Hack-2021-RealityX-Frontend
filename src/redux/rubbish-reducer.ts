import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {StatusCodesEnum} from "../api/api";
import {rubbishAPI} from "../api/rubbish-api";
import {CameraType} from "../types/Types";

export type InitialStateType = typeof initialState
let initialState = {
    timestamp: '' as string,
    cameras: [] as Array<CameraType>,
    cameraData: {} as CameraType,
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
            }
        default:
            return state;
    }
}

export type RubbishActionsType = InferActionsTypes<typeof rubbishActions>

export const rubbishActions = {
    camerasReceived: (timestamp: string, cameras: Array<CameraType>) =>
        ({type: 'RT/RUBBISH/CAMERAS_RECEIVED', payload: {timestamp, cameras}} as const),
    currentCameraReceived: (camera: CameraType) =>
        ({type: 'RT/RUBBISH/CURRENT_CAMERA_RECEIVED', payload: {camera}} as const),

}

type ThunkType = BaseThunkType<RubbishActionsType>

export const getCameras = (): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await rubbishAPI.getCameras()
            console.log('getCameras', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(rubbishActions.camerasReceived(data.data.timestamp, data.data.cameras))
            }
        }
        catch (e:any) {
            console.error('getCameras', e.config)
        }
    }
}
export const getCurrentCamera = (cameraId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await rubbishAPI.getCurrentCamera(cameraId)
            console.log('getCurrentCamera', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(rubbishActions.currentCameraReceived(data.data.camera))
            }
        }
        catch (e:any) {
            console.error('getCurrentCamera', e.config)
        }
    }
}

export default rubbishReducer;