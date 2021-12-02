export const baseURL = process.env.REACT_APP_PRODUCTION_URL || window.location.origin + "/";

export enum StatusCodesEnum {
    Success = 200,
    NotFound = 404,
    BadRequest = 400,
    Forbidden = 403,
    ServerError = 500,
}

export type APIResponseType<D={}, M = '', RC = StatusCodesEnum> = {
    message: M
    status: RC
    data: D
}
