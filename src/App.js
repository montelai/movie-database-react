import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import axios from 'axios';

//components
import Navigation from './components/navbar';
import Quotebox from './components/quotebox';
import Layout from './components/layout';
import SearchBar from './components/searchbar';

class App extends Component {

  state = {
    movieData: [],
    isLoading: true,
    posterImage: '',
    posterRelease: '',
    posterTitle: ''
  }

  async getTrending(media_type='movie', time_window='week'){

    // media type can only be movie / tv / all / person
    // week type can only be day / week
    await axios.get(
      'https://api.themoviedb.org/3/trending/'+media_type+'/'+time_window+'?api_key=79d3f74963659c61aaca378b810882a6')
      .then(res=>{
        const results = res.data.results;
        // console.log(results)
        this.setState({movieData:[...this.state.movieData, ...results], isLoading: false})
        // console.log(this.state.movieData)
      })
      .catch( err => console.log(err))
  }

  async getPoster(){
    
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

  handleMovieSelection(id){
    console.log(id)
  }

  componentDidMount(){
    // api key 79d3f74963659c61aaca378b810882a6
    let results = this.getTrending();
    console.log(results);
    this.getPoster();
  }
  render() {
    return (
    <Container style={{'background':'#141414'}}>
      <SearchBar/>
      <Navigation/>
      <Quotebox quote={"Coming Soon: "+this.state.posterTitle} releaseDate={this.state.posterRelease} imagePath={this.state.posterImage} onClick={this.handlePosterClick}/>/>
      {this.state.isLoading ? <div>Loading</div> :<Layout data={this.state.movieData} onClick={this.handleMovieSelection}/>}
    </Container>
  );}
}

export default App;
