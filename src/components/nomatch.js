import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core'

export default function NoMatch() {
    return (
        <Grid style={{'justifyContent':'center', 'backgroundColor':'white', 'display':'flex', 'flexDirection':'column'}}>
            <Typography>Sorry, we couldn't find the link youre looking for.</Typography>
            <Button variant='contained' color='primary' href='/'>Return Home</Button>
        </Grid>
    )
}
