import { Dispatch } from 'redux';
import { Profile } from '../../models';
import ProfileService from '../../services/ProfileService';

import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    PUT_PROFILE_REQUEST,
    PUT_PROFILE_SUCCESS,
    PUT_PROFILE_FAILURE,
    ProfileActionTypes
} from './types';

const requestProfile = () :ProfileActionTypes => ({
    type: GET_PROFILE_REQUEST
});

const handleRequestProfileSuccess = (data: any) :ProfileActionTypes => ({
    type: GET_PROFILE_SUCCESS,
    data
});

const handleRequestProfileFailure = (err: string) :ProfileActionTypes => ({
    type: GET_PROFILE_FAILURE,
    error: err
});

export const getProfile = () => {
    return (dispatch: Dispatch<any>) => {

        dispatch(requestProfile);
         new ProfileService().get()
                .then((res: any) => dispatch(handleRequestProfileSuccess(res.data)))
                .catch((err: any) => dispatch(handleRequestProfileFailure(err)));
    }
}

const putProfile = (profile: Profile) :ProfileActionTypes => ({
    type: PUT_PROFILE_REQUEST,
    data: profile
});

const handleUpdateProfileSuccess = () :ProfileActionTypes => ({
    type: PUT_PROFILE_SUCCESS
});

const handleUpdateProfileFailure = (err: string) :ProfileActionTypes => ({
    type: PUT_PROFILE_FAILURE,
    error: err
});

export const updateProfile = (profile: Profile) => {
    return (dispatch: Dispatch<any>) => {

        dispatch(putProfile);
         new ProfileService().update(profile)
                .then(dispatch(handleUpdateProfileSuccess))
                .catch((err: any) => dispatch(handleUpdateProfileFailure(err)));
    }
}
