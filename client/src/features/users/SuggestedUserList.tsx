import React from 'react'
import { Button, List, Sticky } from 'semantic-ui-react';

const SuggestedUserList = () => {
    return (
        <>
            <List divided verticalAlign='middle' className='suggested-list ui fixed sticky'>
                <List.Item header className='suggested-list__item -center' ><b>Suggested to follow</b></List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact size='small' color='teal'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>username</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact size='small' color='teal'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>username</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact size='small' color='teal'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>username</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact size='small' color='teal'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>username</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact size='small' color='teal'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>username</List.Content>
                </List.Item>
            </List>
        </>
    )
}

export default SuggestedUserList;
