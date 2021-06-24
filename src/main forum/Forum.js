import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { id: '2', title: 'WashDogs', url: '#' },
  { id: '3', title: 'Nakarm Pieska', url: '#' },
  //{ title: 'Przygarnij psa', url: '#' },
  { id: '4', title: 'Nasze Psiaki', url: '#' },
  { id: '5', title: 'Psie Akcesoria', url: '#' },
];

const mainFeaturedPost = {
  title: 'Psiaki w klatkach, czyli tragedia na 4 łapkach',
  description:
    "Psy w schroniskach nigdy nie poczują się tak jak w domu, smutne realia kojców dla zwierząt.",
  image: 'https://random.dog/be32463b-5476-41ab-bc44-37170957ee69.jpg',
  imgText: 'main image description',
  linkText: 'Kliknij aby przeczytać…',
};

const featuredPosts = [
  {
    title: 'Husky czyli zabawa w energicznym wydaniu',
    date: 'Czerwiec 12',
    description:
      'Psy to najlepsi przyjaciele człowieka a husky starają się bardzo, by to potwierdzić.',
    image: 'https://random.dog/43845f5b-607a-4774-a171-bb878bc408e3.JPG',
    imageText: 'Image Text',
  },
  {
    title: 'Rasowe czy kundelki',
    date: 'Maj 11',
    description:
      'Rasa naszego psa wpływa na jego wygląd i inteligencję za to na pewno nie wpływa na...',
    image: 'https://random.dog/1ac1c3b2-b1e2-4ad5-9668-95cb8183646b.jpg',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'O mnie',
  description:
    'Jestem studentem informatyki na uczelni w Warszawie. Wolny czas spędzam w towarzystwie mojego ulubionego kompana jakim jest mój pies. Aby porozmawiać z ludźmi którzy również kochają psy stworzyłem tą stronę.',
  social: [
    { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/WitoldBaranowski/doggy" },
    { name: 'Twitter', icon: TwitterIcon, link: "https://twitter.com/dog_feelings" }
  ],
};

export default function Forum(usernam) {
  const classes = useStyles();
  const[article, setArticle] = useState('6')
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Psyjaciele" sections={sections} setArticle={setArticle} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} setArticle = {setArticle}/>
          <Grid container spacing={4} >
            {featuredPosts.map((post) => (
              <FeaturedPost setArticle = {setArticle} key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main article={article} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer usernam = {usernam}/>
    </React.Fragment>
  );
}