import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from '../../features/activities/dashboard/ActivityList'
import Navbar from '../../features/common/Navbar'
import SuggestedUserList from '../../features/users/SuggestedUserList'
import UserProfileHeader from '../../features/users/UserProfileHeader'
import '../styles/profile-page.scss'

const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <Grid className='profile-main'>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={7}>
                    <UserProfileHeader />
                    <ActivityList/>
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={5}><SuggestedUserList /></Grid.Column>
            </Grid>

        </>
    )
}

export default ProfilePage
