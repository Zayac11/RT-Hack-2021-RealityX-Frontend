import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/auth-api";

export type InitialStateType = typeof initialState
let initialState = {
    isAuth: false as boolean,
    isLogin: false as boolean,
    isAdminInitialize: false as boolean,
    isLoginError: false as boolean,
}

const authReducer = (state = initialState, action: AuthActionsType):InitialStateType  => {
    switch (action.type) {
        case 'RT/AUTH/LOGIN':
            return {
                ...state,
                isAuth: action.payload.isAuth,
            }
        case 'RT/AUTH/LOGOUT':
            return {
                ...state,
                isAuth: false,
            }
        case 'RT/AUTH/IS_USER_LOGIN': //Если пользователь только что залогинился
            return {
                ...state,
                isLogin: action.payload.isLogin,
            }
        case 'RT/AUTH/IS_ADMIN_INITIALIZE': //Если произошла инициализация админа
            return {
                ...state,
                isAdminInitialize: action.payload.isAdminInitialize,
            }
        case 'RT/AUTH/SET_LOGIN_ERROR': //Неправильный логин или пароль
            return {
                ...state,
                isLoginError: action.payload.isLoginError,
            }

        default:
            return state;
    }
}

export type AuthActionsType = InferActionsTypes<typeof authActions>

export const authActions = {
    login: (isAuth: boolean) =>
        ({type: 'RT/AUTH/LOGIN', payload: {isAuth}} as const),
    logout: () =>
        ({type: 'RT/AUTH/LOGOUT', payload: {}} as const),
    setIsUserLogin: (isLogin: boolean) =>
        ({type: 'RT/AUTH/IS_USER_LOGIN', payload: {isLogin}} as const),
    setIsAdminInitialize: (isAdminInitialize: boolean) =>
        ({type: 'RT/AUTH/IS_ADMIN_INITIALIZE', payload: {isAdminInitialize}} as const),
    setLoginError: (isLoginError: boolean) =>
        ({type: 'RT/AUTH/SET_LOGIN_ERROR', payload: {isLoginError}} as const),
}

type ThunkType = BaseThunkType<AuthActionsType>

export const login = (username: string, password: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authAPI.login(username, password)
            console.log('login', data)
            if(data.access) {
                localStorage.setItem('accessToken', data.access)
                dispatch(authActions.login(true))
                dispatch(authActions.setIsUserLogin(true))
            }
        }
        catch (e:any) {
            console.error('login', e.config)
            dispatch(authActions.setLoginError(true))
        }
    }
}

export default authReducer;