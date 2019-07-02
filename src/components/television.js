import React from 'react'
import {Container, Grid, Card, CardContent, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {Star,HowToVote} from '@material-ui/icons/'

const styles = makeStyles({
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
})
export default function Television(props) {

    const passMovieId = (event) => {
        props.onClick(event.currentTarget.id)
    }

    const classes = styles()
    const imageRoot = 'https://image.tmdb.org/t/p/w500/';
    // console.log(props)
    return (
        <Container spacing={3} className={classes.layoutGrid}>
        {props.data.map((movie, index)=> {
            return (
            <Grid style={{'flex':1}}item xs={4} lg={2} md={3} id={movie.id} key={index}> 
                <Card className={classes.movieCard} onClick={passMovieId} id={movie.id}>
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
