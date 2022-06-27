import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import arrow from '../../img/chevron-down.svg'

const pages = [
  { title: 'Demos', arrow: true },
  { title: 'Services', arrow: true },
  { title: 'Pages', arrow: true },
  { title: 'Portfolio', arrow: true },
  { title: 'Blog', arrow: true },
  { title: 'Contact', arrow: false },
];

const styles = {
  btn: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    textTransform: 'capitalize',
    color: '#000000',
    marginRight: '44px',
    paddingX: 0,
    display: 'flex'
  }
}

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { lg: 'flex' }, justifyContent: 'flex-end' }}>
      {pages.map((page) => (
        <Button
          sx={styles.btn}
          key={page}
        >
          {page.title}
          {page.arrow && <img style={{ marginLeft: '5px' }} src={arrow} />}
        </Button>
      ))}
    </Box>
  )
}

export default Navbar