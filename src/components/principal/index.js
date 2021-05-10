import React, { Component } from 'react'
import { styles } from '../constants';
import { Grid, withStyles, Paper, TextField, Button, Typography } from '@material-ui/core';
import CODIGO from './img/codigo.jpg';

const labels = JSON.parse(localStorage.getItem("labels"))

class princi extends Component {
    render() {
        return (
            <> 
              <Grid container>
                    <Grid item xs={12} >
                        <div  style={{ marginTop: 100}}>
                            <Typography>
                                <h1 style={{color: '#535355', fontSize: '18px', marginTop:50, padding: 50, marginLeft:20}}>____Aliados Comerciales</h1>
                            </Typography>
                            <Typography  style={{color: 'black', fontSize: '40px', marginTop:-40, textAlign:'center', padding: 50, fontWeight: 'bold', marginLeft:350, marginRight:300}}>
                                ¡Marcamos la diferencia!
                            </Typography>

                            <Typography  style={{color: 'black', fontSize: '40px',fontWeight: 'bold', marginTop:-100, textAlign:'center', padding: 50, marginLeft:300, marginRight:280}}>
                                Y nuestros aliados lo confirman.
                            </Typography>

                        </div>

                        <img src={ CODIGO } style={{ position: 'relative',  marginLeft:230, marginTop:50, width:200, height:250}} /> 
                    </Grid>
                </Grid>

                </>
        );
    }
}


const principal = withStyles(styles, { withTheme: true })(princi)

export default princi;