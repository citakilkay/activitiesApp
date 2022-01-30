import React from 'react'
import { Header } from 'semantic-ui-react'

const UserProfileHeader = () => {
    return (
        <>
            <div className='profile-header'>
                <img className='ui image circular medium profile-header__img' src='/assets/user.png' />
                <Header icon textAlign='center' dividing>
                    <Header.Content as='h2'>Username</Header.Content>
                    <Header.Content><a href='' className='profile-followers'>5 Followers</a> <a href='' className='profile-following'>6 Following</a> </Header.Content>
                </Header>
            </div>
        </>
    )
}

export default UserProfileHeader
