import { Profile } from "../../models";

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const PUT_PROFILE_REQUEST = "PUT_PROFILE_REQUEST";
export const PUT_PROFILE_SUCCESS = "PUT_PROFILE_SUCCESS";
export const PUT_PROFILE_FAILURE = "PUT_PROFILE_FAILURE";

interface IGetProfileRequestAction {
    type: typeof GET_PROFILE_REQUEST
}

interface IGetProfileSuccessAction {
    type: typeof GET_PROFILE_SUCCESS,
    data: any
}

interface IGetProfileFailureAction {
    type: typeof GET_PROFILE_FAILURE,
    error: string
}

interface IUpdateProfileRequestAction {
    type: typeof PUT_PROFILE_REQUEST,
    data: Profile
}

interface IUpdateProfileSuccessAction {
    type: typeof PUT_PROFILE_SUCCESS
}

interface IUpdateProfileFailureAction {
    type: typeof PUT_PROFILE_FAILURE,
    error: string
}

export type ProfileActionTypes = 
    IGetProfileRequestAction |
    IGetProfileSuccessAction |
    IGetProfileFailureAction |
    IUpdateProfileRequestAction |
    IUpdateProfileSuccessAction |
    IUpdateProfileFailureAction;
