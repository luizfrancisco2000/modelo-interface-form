import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto'

const useStyles = makeStyles({
    list: {
        padding: 0,
    },
    card: {
        fontFamily: 'Roboto, sans-serif',
        listStyle: 'none',
        borderRadius: 5,
        margin: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
         boxShadow: '0px 1px 1px 1.5px rgba(0, 0, 0, .2)',
        display: 'block',
         padding: '40px 40px'
    },
    number: {
        textAlign: 'center',
        fontSize: 60, 
         margin: '5px 0',
        
    },
    legend:{
        textAlign: 'center',
        fontSize: 20,
    }
})

export default function HorizontalCards () {
    const classes = useStyles()
    //informaçoes de cada card
    const state = {
        cards:[
            {
                number: 40,
                legend: 'Dauasas Trendi',
                color: 'blue'
            },
            {
                number: 78,
                legend: 'Dauasas Trendi',
                color: 'red'
            },
            {
                number: 66,
                legend: 'Dauasas Trendi',
                color: 'green'
            },
            {
                number: 38,
                legend: 'Dauasas Trendi',
                color: 'yellow'
            },
        ]
    }

    
        return(
            <Grid container>
                {state.cards.map(card=>(
                    <Grid item xs={6} md={3}>
                        <div className={classes.card}>
                            <div className={classes.number} style={{color: card.color}}>{card.number}</div>
                            <div className={classes.legend}>{card.legend}</div>
                        </div>
                    </Grid>
                 ))}
            </Grid>
        )
    
}