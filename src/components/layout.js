import React, {Component} from 'react'
import {Container, Grid, Card, Typography,CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {Star,HowToVote} from '@material-ui/icons/'

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
            <Container spacing={3} className={classes.layoutGrid}>
                    {data.map((movie, index)=> {
                        return (
                        <Grid item xs={4} lg={2} md={3} id={movie.id}> 
                            <Card className={classes.movieCard} onClick={this.passMovieId} id={movie.id}>
                                    <CardContent className={classes.movieCardContent}>
                                        <img src={imageRoot+movie.poster_path} alt={movie.title} className={classes.media}/>
                                        <Typography>{movie.title}</Typography>
                                        <Typography className={classes.ratings}><Star/>{movie.vote_average}<HowToVote/>{movie.vote_count}</Typography>
                                    </CardContent>
                        </Card>
                        </Grid>
                        
                        )
                    })}
            </Container>
        )
    }
    
}

export default withStyles(styles)(Layout)
