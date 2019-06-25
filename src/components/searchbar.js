import React, { Component } from 'react'
import {Container, Input, FormControl, Typography} from '@material-ui/core'
import {withStyles} from "@material-ui/styles";


const styles = {
    searchBarContainer :{
        // border:'1px black dotted'
        margin: 5,
        padding: 5,
        height: 50,
        border: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        color:'#e5e5e5',
        

    },
    searchBar:{
        width:'50%',
        color:'#e5e5e5',
        border:1,
        borderColor: 'white'
    },
    searchBarSearch: {
        textAlign: 'center',
        color:'#e5e5e5',
        },
    underline :{
        // background: '#e5e5e5',
        borderBottom: '2px solid #e5e5e5'
    }
};

class SearchBar extends Component{

    state = {
        query: null
    }
    render() {
        const {classes} = this.props
        return (
            <Container className={classes.searchBarContainer}>
                <Typography>Movie Review Db</Typography>
                <FormControl className={classes.searchBar}>
                    <Input 
                        classes={{root:classes.searchBarSearch, underline:classes.underline}} 
                        placeholder="search for a movie" 
                        fullWidth={true} 
                        disableUnderline={false} 
                        onChange={(event)=> {
                            this.setState({
                                query: event.target.value
                            })
                    }}/>
                </FormControl>
            </Container>
        )
    }
        
    
}

export default withStyles(styles)(SearchBar);