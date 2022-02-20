import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityDetailsDashboard from '../../features/activities/details/ActivityDetailsDashboard'
import Navbar from '../../features/common/Navbar'
import SuggestedUserList from '../../features/users/SuggestedUserList'
import UserProfileHeader from '../../features/users/UserProfileHeader'
import '../styles/details-page.scss'

const ActivityDetailsPage = () => {
    return (
        <>
        <Navbar />
            <Grid className='profile-main'>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={7}>
                    <ActivityDetailsDashboard/>
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={5}><SuggestedUserList /></Grid.Column>
            </Grid>
        </>
    )
}

export default ActivityDetailsPage
