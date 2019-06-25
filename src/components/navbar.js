import React from 'react';
import {Container, Tabs, Tab} from '@material-ui/core';

export default function Navigation() {
    return (
        <Container>
            <Tabs variant='fullWidth'>
                <Tab label="In theatre" value="theater"/>
                <Tab label="Upcoming" value="upcoming"/>
                <Tab label="Rentals" value="rental"/>
            </Tabs>
        </Container>
    )
}
