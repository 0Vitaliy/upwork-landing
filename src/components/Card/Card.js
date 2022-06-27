import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/CardContent'
import MuiCard from '@mui/material/Card'
import arrowRight from '../../img/arrow-right.svg'
import strategy from '../../img/strategy.svg'
import { styles } from './style'

const Card = () => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={strategy} />
        <Typography variant="h3" sx={{ marginTop: '24px' }}>
          strategy
        </Typography>
        <List>
          <ListItem sx={styles.listItem}> <Box component="img" src={arrowRight} />product manegment</ListItem>
          <ListItem sx={styles.listItem}> <Box component="img" src={arrowRight} />mpv definition</ListItem>
          <ListItem sx={styles.listItem}> <Box component="img" src={arrowRight} />product strategy</ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button size="small" sx={styles.btn}>
          Learn More
          <Box component="img" src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card