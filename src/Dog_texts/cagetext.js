import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


function Cage(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Psy w schroniskach nigdy nie poczują się tak jak w domu, smutne realia kojców dla zwierząt.
      </Typography>
      <Divider />
      <text style={textStyle}>&emsp;Początek w nowej pracy, nawet jeśli tylko jednodniowej, nigdy nie jest prosty. Dlatego jeszcze przed wejściem do budynku, w którym znajdują się psiaki (część z nich jest w pomieszczeniu, część w klatkach na zewnątrz), uprzedzono mnie, abym nastawił się na przykry zapach. - Ostrzegam, że to może być nieprzyjemne. Zwłaszcza na początku, ale potem da się przyzwyczaić - mówi Iwona Jaszke z jastrzębskiego schroniska.
<p></p>
      Po wejściu do środka natychmiast uderza mnie nieprzyjemny odór. Powiedzmy to wprost:psiaki załatwiają się w boksach, więc nietrudno domyślić się, że smród jest nie do opisania. Ale po kilku minutach nos zaczyna się przyzwyczajać, zgodnie z zapewnieniami pani Iwony. - Najpierw trzeba nakarmić zwierzaki. Każdy dostaje praktycznie tyle samo, więc nie ma niesprawiedliwości - śmieje się moja przewodniczka.
      <p></p>
      Zanurzamy łopatkę w karmie i jedną porcję nakładamy do miski. Później wchodzimy do klatki i zanosimy psiakowi. Cieszą się, jak co dzień z rana, bo wreszcie mają kontakt z człowiekiem. Choć niektóre boją się wyjść z budy, a w ciemnościach “domku” widać jedynie świecące się ślepka.
      <p></p>
      - To najczęściej psiaki, które były skrzywdzone przez właścicieli. Nie mają zaufania do obcych - tłumaczy paniIwona.
      Kiwam twierdząco głową, zastanawiając się, co musiało przeżyć każde z nich, aż nagle czuje na swojej dłoni przyjemny chłód. Odwracam się i z zaskoczeniem stwierdzam, że moją rękę liże... dwumiesięczny szczeniak.
</text>
</Grid>)}
      export default Cage;




