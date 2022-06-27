import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Card } from "../Card"
import { styles } from './style'

const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">creative design solutions</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
          professional deign agency to provide solutions
        </Typography>
        <Stack sx={styles.stack} >
          {[0, 1, 2].map((item) => {
            return < Card />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default CreativeDesign