import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


function Race(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Rasowe czy kundelki?
      </Typography>
      <Divider />
      <text style={textStyle}>
          &emsp;
                Ostateczna decyzja przy wyborze psiaka powinna zależeć nie tylko od tego,
                 czy dany zwierzak podoba nam się z wyglądu. Kupując psa określonej rasy,
                  powinniśmy więc wziąć pod uwagę jego cechy charakteru i instynkty,
                   jakie dana rasa przejawia i zastanowić się, czy na pewno będziemy w
                    stanie zapewnić wybranemu zwierzakowi odpowiednie dla niego aktywności.
                     Jeśli jednak nie zależy nam, by domowy pupil spełniał określone funkcje
                      w naszym życiu i po prostu potrzebujemy wiernego towarzysza, warto rozważyć kundelka.
                       Ich wychowanie nie wymaga tak obszernej wiedzy na temat psich instynktów lub specjalnych treningów. 
                      <p></p> &emsp;Pamiętajmy jednak, że kundelek to często psiak o niewiadomej przeszłości, który może potrzebować specjalisty,
                 by odnaleźć się w nowej sytuacji życiowej i towarzyszyć nam w codziennym życiu.
               </text>
               </Grid>
               ) 
}
export default Race;