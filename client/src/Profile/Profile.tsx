import * as React from 'react';
import { connect } from 'react-redux';
import { Profile } from '../models';
import { getProfile, updateProfile } from './actions';

const mapStateToProps = (state: any) => ({
    profile: state.profile.entity
});

export default connect(
    mapStateToProps, 
    {
        getProfile,
        updateProfile
    })((props: IProfileComponentProps) => {

    React.useEffect(() => {
        props.getProfile();
    });

    return (
        <h1>User Profile</h1>
    )
});

interface IProfileComponentProps {
    getProfile: () => void;
    updateProfile: (profile: Profile) => void;
    profile: Profile;
}
