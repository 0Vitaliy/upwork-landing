import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Button } from '../Button'
import photo_send from '../../img/photo_send_2.png'
import { styles } from './style'

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs} >
      <Box sx={styles.wrapper} >
        <Box sx={styles.form} >
          <Typography variant="h2">mind! contact us</Typography>
          <Typography
            variant="body1"
            sx={{ margin: '24px 0' }}
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, sagittis eget facilisi in in urna tristique risus. Tortor consectetur nulla pretium malesuada porttitor.</Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}><EmailOutlinedIcon sx={styles.imgInfo} />email us</Box>
              <Box sx={styles.titleValue}>support@gmail.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}><LocalPhoneOutlinedIcon sx={styles.imgInfo} />phone us</Box>
              <Box sx={styles.titleValue}>+012 (345) 67 89</Box>
            </Box>
          </Box>
          <Box sx={styles.inputs}>
            <TextField
              placeholder="Full Name"
              sx={styles.textField}
            />
            <TextField
              placeholder="Email Address"
              sx={styles.textField}
            />
          </Box>
          <TextareaAutosize
            minRows={6}
            placeholder="Write message"
            style={styles.textareaAutosize}
          />
          <Button>send us message<ArrowForwardIosOutlinedIcon /></Button>
        </Box>
        <Box>
          <Box component="img" sx={styles.foto} src={photo_send} />
        </Box>

      </Box>
    </Box>
  )
}

export default ContactUs