import React from 'react'
import { Card, Icon, Label, List } from 'semantic-ui-react';

const ActivityCard = () => {
    return (
        <Card centered fluid>
            <Card.Content><Label color='red' ribbon='right'>Culture</Label><Card.Header>Title</Card.Header><Card.Meta>@username</Card.Meta></Card.Content>
            <Card.Content>All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here...
                <Card.Meta> <b>City</b> ~ Venue</Card.Meta>
            </Card.Content>
            <Card.Content><Card.Meta>90% <Icon name='like' /> <span className='right floated'>02.12.2021 ~ 01.01.2022</span></Card.Meta></Card.Content>
        </Card>
    )
}

export default ActivityCard;
