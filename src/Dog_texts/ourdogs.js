import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import dog from '../DOGS/dog.jpg'
import dog2 from '../DOGS/dog2.gif'

function Our(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Nasze Piesie
      </Typography>
      <Divider /><text style={textStyle}><strong>Nasze pieski</strong><p></p></text>
      <text style={textStyle}><span>&emsp;&emsp;&emsp;Atena &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Precel<p></p><img alt="atena" src={dog} width="157" height="210"></img></span>         
      <span> <img alt="precel" src={dog2} width="117" height="210"></img></span></text>
               </Grid>) 
}
export default Our;