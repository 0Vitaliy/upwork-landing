import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import photo_banner from '../../img/photo_banner.jpg'
import Button from '../Button/Button'
import { styles } from './style'

const MostAdvanced = () => {
  return (
    <Box sx={styles.mostAdvanced}>
      <Box sx={styles.wrapper}>
        <Box>
          <Typography variant="h2">The most<br />
            Advanced Education</Typography>
          <Typography sx={styles.text} variant="body1">Choose out of 2500+ mentors. Trusted by 250k users.<br />
            Industry experts and top university professors Runs in a browser. Can be downloaded on desktop, tablet and mobiles. Extremely fast loading at 200ms. Updates work directory from the website.</Typography>
          <Button>Join Us</Button>
        </Box>
        <Box component="img" src={photo_banner} sx={styles.foto} />
      </Box>
    </Box>
  )
}

export default MostAdvanced