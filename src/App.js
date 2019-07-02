import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import axios from 'axios';
import {Route, Switch, withRouter} from 'react-router-dom'


//components
import Navigation from './components/navbar';
import Quotebox from './components/quotebox';
import SearchBar from './components/searchbar';
import LatestMovie from './components/latestMovies';
import Television from './components/television';
import People from './components/actors';
import NoMatch from './components/nomatch';
import SingleMovie from './components/singleMovie';
import SearchResults from './components/searchResults';
import TestPage from './components/testpage';
class App extends Component {

  state = {
    movieData: [],
    tvData:[],
    peopleData:[],
    // isLoading: true,
    posterImage: '',
    posterRelease: '',
    posterTitle: '',

    // movie data state
    movieSelected: null,
    movieQuery: null,
    movieQueryData: null,
    

    //tab state
    tabIndex: 0
  }

  testdata = {
    data :  [
      {id: 299537,original_title: "Captain Marvel",poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",title: "Captain Marvel",release_date: "2019-03-06",vote_average: 7,vote_count: 6019, overview: 'lorem30asdfasdfsdf'},
      {id: 2995127,original_title: "Captain Marvel",poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",title: "Captain Marvel",release_date: "2019-03-06",vote_average: 7,vote_count: 6019}
    ],
    movieId: "486131"
  }

  tabs = ['latestmovie', 'television','actors']

  async getTrending(media_type='movie', time_window='week'){

    // media type can only be movie / tv / all / person
    // week type can only be day / week
    await axios.get(
      'https://api.themoviedb.org/3/trending/'+media_type+'/'+time_window+'?api_key=79d3f74963659c61aaca378b810882a6')
      .then(res=>{
        const results = res.data.results;
        // console.log(results)
        this.setState({movieData:[...this.state.movieData, ...results]})
        // console.log(this.state.movieData)
      })
      .catch( err => console.log(err))
  }
  async getTV(media_type='tv', time_window='week'){

    // media type can only be movie / tv / all / person
    // week type can only be day / week
    await axios.get(
      'https://api.themoviedb.org/3/trending/'+media_type+'/'+time_window+'?api_key=79d3f74963659c61aaca378b810882a6')
      .then(res=>{
        const results = res.data.results;
        // console.log(results)
        this.setState({tvData:[...this.state.tvData, ...results]})
        // console.log(this.state.movieData)
      })
      .catch( err => console.log(err))
  }
  async getPeople(media_type='person', time_window='week'){

    // media type can only be movie / tv / all / person
    // week type can only be day / week
    await axios.get(
      'https://api.themoviedb.org/3/trending/'+media_type+'/'+time_window+'?api_key=79d3f74963659c61aaca378b810882a6')
      .then(res=>{
        const results = res.data.results;
        // console.log(results)
        this.setState({peopleData:[...this.state.peopleData, ...results]})
        // console.log(this.state.movieData)
      })
      .catch( err => console.log(err))
  }

  async getPoster(){
    console.log('Called Get Poster')
    await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=79d3f74963659c61aaca378b810882a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    ).then( res => {
      // console.log(res.data)
      const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'+res.data.results[0].backdrop_path
      this.setState({
        posterImage: imageBaseUrl,
        posterRelease: res.data.results[0].release_date,
        posterTitle: res.data.results[0].title
      })
    })
    .catch( err => console.log(err))
  }
  handlePosterClick = () => {
    console.log('Clicked Poster')
  }

  handleMovieSelection = (id) => {
    console.log('Selected Movie Id:',id)
    this.setState({
      movieSelected:id
    })
    this.props.history.push(`/catalog/${id}`)
  }

  handleTabChange = (id) => {
    console.log('App Level Tab Index', id)
    this.setState({
      tabIndex:id
    })
    this.props.history.push(`/${this.tabs[id]}`)
  }

   handleQuerySearch = async(query) => {

    //call api to get query data
    //query is a list of movies
   let data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79d3f74963659c61aaca378b810882a6&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => {
      console.log(res)
      this.setState({movieQuery: query, movieQueryData: res.data.results})
      console.log(this.props.history)
      this.props.history.push(`/search/${query}`)
      })
  }

  componentDidMount(){
    // api key 79d3f74963659c61aaca378b810882a6
    let results = this.getTrending();
    console.log(results);
    this.getPoster();
    this.getPeople();
    this.getTV();
  }
  render() {
    return (
    <Container style={{'background':'#141414'}}>
      <SearchBar querySearch={this.handleQuerySearch}/>
      <Navigation navigationTabChange={this.handleTabChange} indexValue={this.state.tabIndex}/>
      <Quotebox quote={"Coming Soon: "+this.state.posterTitle} releaseDate={this.state.posterRelease} imagePath={this.state.posterImage} onClick={this.handlePosterClick}/>
      

      {/* //Routes Here */}
      <Switch>
        <Route exact path='/' render={props => <LatestMovie {...props} data={this.state.movieData} onClick={this.handleMovieSelection}/>} />
        <Route exact path='/latestmovie' render={props => <LatestMovie {...props} data={this.state.movieData} onClick={this.handleMovieSelection}/>} />
        <Route exact path='/television' render={props => <Television {...props} data={this.state.tvData} onClick={this.handleMovieSelection}/>} />
        <Route exact path='/actors' render={props => <People {...props} data={this.state.peopleData} onClick={this.handleMovieSelection}/>} />
        <Route path='/catalog/:id' render={props => <SingleMovie {...props} data={this.state.movieData} movieId={this.state.movieSelected}/>}/>
        <Route path='/search/:query' render={props => <LatestMovie {...props} data={this.state.movieQueryData} onClick={this.handleMovieSelection}/>}/>
        {/* <Route path='/test' render={props => <TestPage {...props} data={this.state.}/>}/> */}
        <Route component={NoMatch} />
      </Switch>
      
    </Container>
  );}
}

export default withRouter(App);
