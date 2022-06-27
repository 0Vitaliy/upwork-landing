import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import close from '../../img/close.svg'
import { Navbar } from '../Navbar';

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { width: '100%' }
      }}
      anchor={'left'}
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: '20px' }}>
        <IconButton onClick={onClose} sx={{ padding: 0 }}>
          <img src={close} />
        </IconButton>
        <Box sx={{ marginTop: '34px' }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  )
}

export default Drawer