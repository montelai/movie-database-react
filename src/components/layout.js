import React, {Component} from 'react'
import {Container, Grid, Card, Typography,CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {Star,HowToVote} from '@material-ui/icons/'

import latestMovies from './latestMovies'

const styles = {
    layoutGrid:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        // justifyContent: 'space-around'
    },
    movieCard : { 
        maxHeight: 345,
        maxwidth: 300,
        margin: 10,
        padding: 10,
        

    },
    movieCardContent:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0
    },
    media: {
        height: 140,
        // width: '80%'
    },

    ratings: {
        alignItems: 'center',
        display:'flex',
        justifyContent: 'space-around'
    }
};
class Layout extends Component {

    state = {
        selectedMovie : null
    }

    passMovieId = (event) => {
        this.setState({
            selectedMovie : event.currentTarget.id
        })

        this.props.onClick(event.currentTarget.id)

    }
    render () {
        const {classes} = this.props
        const imageRoot = 'https://image.tmdb.org/t/p/w500/';
        let data = this.props.data;

        return (
            <Grid>
                <latestMovies data={data}/>
            </Grid>
        )
    }
    
}

export default withStyles(styles)(Layout)
