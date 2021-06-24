import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Link } from 'react-router-dom';
import psiespanie1 from '../DOGS/psiespanie1.png' 
import psiespanie2 from '../DOGS/psiespanie2.png' 
import psiespanie3 from '../DOGS/psiespanie3.png' 

function Sleepin(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Psie Akcesoria
      </Typography>
      <Divider /><BrowserRouter>
      <text style={textStyle}>

          <strong >Serdecznie polecamy</strong><p></p>
Instagram koleżanki tworzącej ręcznie fantastycznej jakości akcesoria dla psów:<dr></dr><strong > <Link to={{ pathname: "https://www.instagram.com/psiespanie/" }} target="_blank"> Psie Spanie na Instagramie </Link></strong><p></p>
Dostępny także sklep w którym można nabyć produkty: <strong > <Link to={{ pathname: "https://skleppsiespanie.pl" }} target="_blank"> Psie Spanie </Link></strong><p></p>         
                         </text>
                         <span> <img alt="precel" src={psiespanie1} width="153" height="210"></img></span>
                         <span> <img alt="precel" src={psiespanie2} width="279" height="210"></img></span>
                         <span> <img alt="precel" src={psiespanie3} width="180" height="210"></img></span>
                         </BrowserRouter>
               </Grid>
               )
}
export default Sleepin;