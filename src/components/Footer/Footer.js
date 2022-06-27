import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import dribble from '../../img/dribble.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import behince from '../../img/behince.svg'
import medium from '../../img/medium.svg'
import { styles } from './style'

const services = ['UX/UI Design', 'web development', 'SEO Optimization', 'product design', 'logo design', 'brand design']
const links = ['about agency', 'latest news & blog', 'meet the team', 'popular services', 'testimonials', 'neeed a Career?']

const follow = [
  { title: 'dribbble', img: dribble },
  { title: 'instagram', img: <InstagramIcon sx={styles.icon} /> },
  { title: 'twitter', img: <TwitterIcon sx={styles.icon} /> },
  { title: 'behince', img: behince },
  { title: 'facebook', img: <FacebookIcon sx={styles.icon} /> },
  { title: 'medium', img: medium },
]

const Footer = () => {
  return (
    <Box sx={styles.footer} >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={styles.gridWrapper}>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3">services</Typography>
            <List>
              {services.map((item) => {
                return (
                  <ListItem sx={styles.itemList}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3">links</Typography>
            <List>
              {links.map((item) => {
                return (
                  <ListItem sx={styles.itemList}>

                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} >
          <Box>
            <Typography variant="h3">follow</Typography>
            <List>
              {follow.map((item) => {
                return (
                  <ListItem sx={styles.itemList}>
                    {typeof item.img === 'string' ? <Box component="img" src={item.img} /> : item.img}
                    <Box component="span" sx={{ marginLeft: '5px' }}>{item.title}</Box>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={styles.emailBlock} >
          <Box sx={styles.subscribeFooter}>
            <Typography variant="h3" sx={styles.title}>subscribe our newsletter</Typography>
            <Typography sx={styles.text}>Lorem ipsum dolor sit amet, <Link>consectetur adipiscing</Link> elit.consectetur. psum dolor sit am psum dolor sit am. </Typography>
            <Paper
              component="form"
              sx={styles.paper}
            >
              <InputBase
                sx={styles.inputBase}
                placeholder="Email address"
              />
              <Button sx={styles.btn}>Sign up</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer