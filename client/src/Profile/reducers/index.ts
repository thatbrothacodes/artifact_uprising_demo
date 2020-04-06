import * as types from '../actions/types';
import { Profile } from '../../models';

interface IProfileState {
    entity: Profile | undefined;
    error: any;
    loading: boolean;
};

const initialState: IProfileState = {
    entity: undefined,
    error: null,
    loading: false
};

export default (state: IProfileState = initialState, action: types.ProfileActionTypes) => {
    switch (action.type) {
        case types.GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_PROFILE_SUCCESS:
            return {
                ...state,
                entity: action.data,
                loading: false
            }
        case types.GET_PROFILE_FAILURE:
            return {
                ...state,
                entity: undefined,
                error: action.error,
                loading: false
            }
        case types.PUT_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.PUT_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.PUT_PROFILE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}
