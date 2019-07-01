import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    
    quoteContainer: {
        display:'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginBottom:10,
        padding: 10,
        backgroundPosition: 'center center',
        height: '300px'
        // backgroundImage: `url(${props.imagePath})`
    },
    quote : {
        background: '#8b0e04',
        color:'white',
        padding: '20px',
        // textAlign:'center',  
        // alignItems: 'center'
        marginTop: 5,
        marginBottom:20,
    },
})

export default function Quotebox(props) {

    const classes = useStyles();
    // console.log(props.imagePath)

    return (
        <Container className={classes.quoteContainer} style={{'backgroundImage': `url(${props.imagePath})`, 'backgroundSize':'100% 100%','backgroundRepeat':'no-repeat'}}>
                <Typography variant='h5' className={classes.quote}>
                    {props.quote}
                <br/>
                    {props.releaseDate}
                </Typography>
        </Container>
    )
}
