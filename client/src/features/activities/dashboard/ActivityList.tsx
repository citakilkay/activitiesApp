import React from 'react'
import { Grid, List, Segment } from 'semantic-ui-react';
import ActivityCard from './ActivityCard';

const ActivityList = () => {
    const myList: number[] = [1, 2, 5, 7, 8, 9];
    return (
        <>
            {
                myList.map(x => {
                    console.log(x)
                    return (
                        <ActivityCard key={x} />
                    )
                })
            }
        </>
    )
}

export default ActivityList;
