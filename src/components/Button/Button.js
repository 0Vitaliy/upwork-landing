import MuiButton from '@mui/material/Button'

const styles = {
  btn: {
    background: '#777FEB',
    borderRadius: '8px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    padding: '20px 60px',
    '&:hover': {
      background: '#777FEB',
    }
  }
}

const Button = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>
}

export default Button