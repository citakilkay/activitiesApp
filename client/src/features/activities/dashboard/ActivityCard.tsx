import React from 'react'
import { Button, Card, Icon, Label, List, Popup } from 'semantic-ui-react';

const ActivityCard = () => {
    return (
        <Card centered fluid>
            <Card.Content><Label color='red' ribbon='right'>Culture</Label><Card.Header>Title</Card.Header><Card.Meta>@username</Card.Meta></Card.Content>
            <Card.Content>All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here. All contents will be came here...
                <Card.Meta className='activity-card__meta'> <Popup trigger={<a><b>City</b> ~ Venue</a>} content="No Location " basic /> <span className='right floated'>02.12.2021 ~ 01.01.2022</span></Card.Meta>
            </Card.Content>
            <Card.Content>
                <Card.Meta>90% <Icon verticalAlign='middle' name='like' />
                    <Button compact color='grey' className='right floated'>Details</Button>
                    <Button compact color='teal' className='right floated'>Attend</Button>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default ActivityCard;
