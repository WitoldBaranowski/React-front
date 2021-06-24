import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


function Wash(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Pielęgnacja
      </Typography>
      <Divider />
      <text style={textStyle}>

          <strong >Kąpiel raz na kwartał</strong><p></p>
          &emsp;Psy z podszerstkiem radzimy kąpać raz na kwartał. Sierść z podszerstekiem to taka, gdzie pod warstwą okrywową, która może być szorstka (np. u sznaucerów) lub jedwabista (np. u owczarka szkockiego) znajduje się puch. Podszerstek chroni przed różnymi warunkami atmosferycznymi. Spełnia również funkcję termoregulacji. Jeśli pies z podszerskiem nie mieszka w domu,
 tylko na podwórku, wystarczy mu nawet kąpiel raz na pół roku, na wiosnę  i późną jesienią, aby przygotować psa do zimy. 
                      <p></p> <strong>Kąpiel raz w miesiącu</strong><p></p>

                      &emsp;Kąpiel raz w miesiącu polecamy psom , które mają krótką sierść gładko przylegającą do ciała (np. mops, labrador). Podana częstotliwość w głównej mierze zależy od tego, jaki tryb życia prowadzi pies. Jeśli jest aktywny, dużo biega i mocno się brudzi, to można kąpać go nawet cześciej. Co ważne, używajmy odżywki, która nawilży skórę i dzięki temu nie doprowadzimy do jej podrażnień.
               </text>
               </Grid>
               ) 
}
export default Wash;