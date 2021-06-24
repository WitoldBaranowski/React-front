import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


function Husky(){
    const textStyle ={
        fontSize: 16,
      };
      const hStyle ={
        fontSize: 26,
      };
      return(
        <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={hStyle}>
        Husky czyli zabawa w energicznym wydaniu.
      </Typography>
      <Divider /><text style={textStyle}>&emsp;Husky syberyjski to pies charakteryzujący się dużym temperamentem. Jest zwierzakiem bardzo żywiołowym, radosnym oraz przyjacielskim. Jest także czujny, a jednocześnie bardzo łagodny – dlatego nie sprawdzi się w roli stróża. Husky niezwykle szybko przystosowuje się do nowych warunków – to niewątpliwie jedna z jego ogromnych zalet. Posiada też wady, szczególnie jedną, którą wiele osób uznaje za plus. Mianowicie husky potrafi być bardzo uparty. Choć jego charakter jest łagodny, to jednocześnie bardzo silny. A to oznacza, że psiak ten jest w stanie zdominować właściciela, szczególnie jeśli ten jest wobec niego łagodny i niekonsekwentny. Czy husky może wychowywać się z dziećmi? Jak najbardziej tak. Trzeba jednak pamiętać, żeby nie zostawiać psiaka samego z maluchem. Husky jest bowiem bardzo ruchliwy i spontaniczny przez co niechcący może skrzywdzić dziecko. 
        <p></p>
        Myśląc o posiadaniu rasy husky syberyjski trzeba liczyć się tym, że jest to pies, który nie znosi wręcz samotności.
         Nie będzie czuł się dobrze godzinami przesiadując w domu bez swojej rodziny. Powinien jak najwięcej czasu spędzać z
          człowiekiem lub z innymi psami (najlepiej tej samej rasy, ale nie jest to warunek konieczny). Husky syberyjski
           posiada wiele cech swoich wilczych przodków oraz od alaskana. Rzadko szczeka, za to bardzo często wyje.
            W stadzie psy te zachowywały i do dzisiaj zachowują hierarchię. Dlatego mogą zdarzyć się walki dominacyjne.
             Warto mieć na uwadze, że husky syberyjski lubi uciekać. Z jednej strony występuje w nim duży instynkt myśliwego
              (dlatego pod żadnym pozorem nie można zostawiać husky’iego bez nadzoru szczególnie w okolicach lasu itd.),
               z drugiej – często po prostu się nudzi.</text>
               </Grid>) 
}
export default Husky;