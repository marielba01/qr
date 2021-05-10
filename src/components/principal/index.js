import React, { Component } from 'react'
import { styles } from '../constants';
import { Grid, withStyles, Paper, TextField, Button, Typography } from '@material-ui/core';
import CODIGO from './img/codigo.jpg';
import AUTENTICACION from './img/autenticacion.jpg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const labels = JSON.parse(localStorage.getItem("labels"))
export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


        return (
            <> 
              <Grid container>
                    <Grid item xs={12} >
                     
                        
                        <img src={ AUTENTICACION } style={{ width:1350, height:620}} />
                            <Typography  style={{color: 'white', fontSize: '30px', marginTop:-620, textAlign:'center', padding: 20, fontWeight: 'bold', marginLeft:350, marginRight:300}}>
                                ¡Bienvenido al Sistema de Autenticacion QR!
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ marginTop:-10, marginLeft:600}}>
                                <Typography style={{color: 'white', textAlign: 'center',fontSize: '15px'}}>
                                <b><u> Hacer Click Aqui</u> </b>
                                </Typography>
                            </Button>
                            
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
       
                                <DialogContent>
                                <img src={ CODIGO } style={{  marginLeft:5, marginTop:1, width:500, height:450}} /> 
                                
                                <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ marginTop:-10, marginLeft:10}}>
                                <Typography style={{color: 'black', textAlign: 'center',fontSize: '15px'}}>
                                <b><u>  Si deseas escanear tu identificacion, </u> </b>
                                <a href="http://localhost:3000/">Hacer Click Aqui</a>

                                </Typography>
                            </Button>
                                


                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
         
                        

                        
                    </Grid>
                </Grid>

                </>
        );
    }



