import React from 'react';
import {Container, Tabs, Tab} from '@material-ui/core';

export default function Navigation(props) {

    function tabChange (event, newValue) {
        props.navigationTabChange(newValue)
    }

    return (
        <Container>
            <Tabs 
                value={props.indexValue} 
                onChange={tabChange}
                variant='fullWidth' 
                style={{'backgroundColor':'white', 'borderRadius':'10px'}}
                indicatorColor="primary"
                textColor="primary">
                <Tab label="In theatre" value={0} />
                <Tab label="Upcoming" value={1}/>
                <Tab label="Rentals" value={2}/>
            </Tabs>
        </Container>
    )
}
