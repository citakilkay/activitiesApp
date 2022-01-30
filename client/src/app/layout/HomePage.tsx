import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import Navbar from '../../features/common/Navbar'
import SuggestedUserList from '../../features/users/SuggestedUserList'
import '../styles/home-page.scss'
import '../styles/common.scss'
const HomePage = () => {
    return (
        <>
            <Navbar />
            <Grid className='main'>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={7}>
                    <ActivityDashboard />
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={5}><SuggestedUserList /></Grid.Column>
            </Grid>
        </>
    )
}

export default HomePage
