import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'

export default function SingleMovie(props) {

    // console.log(props)
    let movieData = []

    if (props.fromSearch == true){
        movieData = props.searchdata.filter(movie => movie.id == props.movieId)[0];
    } else {
        if (props.tabIndex == 0){
            movieData = props.data.filter(movie => movie.id == props.movieId)[0];
        } else {
            movieData = props.tvdata.filter(movie => movie.id == props.movieId)[0];
        }
        
    }

    if (movieData == null){
        movieData = {
            data :  [
              {id: 299537,original_title: "Captain Marvel",poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",title: "Captain Marvel",release_date: "2019-03-06",vote_average: 7,vote_count: 6019, overview: 'lorem30asdfasdfsdf'},
              {id: 2995127,original_title: "Captain Marvel",poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",title: "Captain Marvel",release_date: "2019-03-06",vote_average: 7,vote_count: 6019}
            ],
            movieId: "486131"
          }
    }
    console.log(props, movieData)
    
    // console.log(movieData)


    return (
        <Paper style={{'backgroundColor':'#1e1e1e'}}>
        <Grid container  spacing={3}>
            <Grid item style={{'padding':'10px', 'justifyContent':'center', 'display':'flex','flex':'2'}}><img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} style={{'margin':'10px', 'height':'50%'}} alt={movieData.title}/></Grid>
            <Grid item xs={12} sm container style={{'display':'flex','flex':'4'}}>
                <Grid container direction="column" spacing={2}>
                    <Typography variant='h4' style={{"textAlign":'center', 'color':'#f6a00d'}}>Movie Info</Typography>
                    <hr/>
                    <Typography style={{'color':'#e3e7e6'}}><strong style={{'color':'#f6a00d'}}>Released On:</strong> {movieData.release_date}</Typography>
                    <Typography style={{'color':'#e3e7e6'}}><strong style={{'color':'#f6a00d'}}>Vote Average:</strong> {movieData.vote_average}</Typography>
                    <Typography style={{'color':'#e3e7e6'}}><strong style={{'color':'#f6a00d'}}>Votes:</strong> {movieData.vote_count}</Typography>
                    <br/>
                    <br/>
                    <Typography style={{'color':'#e3e7e6'}}><strong style={{'color':'#f6a00d'}}>Overview</strong></Typography>
                    <br/>
                    <Typography style={{'color':'#e3e7e6'}}>{movieData.overview}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid></Grid>
    </Paper>
    )
}
