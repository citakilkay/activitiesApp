import React from 'react'
import { Button, List } from 'semantic-ui-react';

const SuggestedUserList = () => {
    return (
        <>
            <List divided verticalAlign='middle' className='suggested-list'>
                <List.Item header className='suggested-list__item -center' ><b>Suggested to follow</b></List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact color='blue'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact color='blue'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact color='blue'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact toggle color='blue'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item className='suggested-list__item'>
                    <List.Content floated='right'>
                        <Button compact toggle color='blue'>Follow</Button>
                    </List.Content>
                    <img className='ui image avatar' src="/assets/user.png" />
                    <List.Content>Lena</List.Content>
                </List.Item>
            </List>
        </>
    )
}

export default SuggestedUserList;
