import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Link } from 'react-router-dom';


function Food(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Nakarm Pieska
      </Typography>
      <Divider />
      <BrowserRouter>
      <text style={textStyle}>

          <strong >NAKARM PIESKA</strong><p></p>
          &emsp;Strona dzięki której za darmo możesz nakarmić psiaka:<strong > <Link to={{ pathname: "https://www.karmimypsiaki.pl/nakarm-psiaka/" }} target="_blank"> https://www.karmimypsiaki.pl/nakarm-psiaka/ </Link></strong><p></p>
                         <img alt="dog" src = "https://random.dog/631d7e1b-7887-468d-b27c-77f5e91e53d6.gif"/>
                         
                         </text>
                         </BrowserRouter>
               </Grid>
               ) 
}
export default Food;