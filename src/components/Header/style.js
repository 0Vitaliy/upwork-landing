export const styles = {
  appBar: (theme) => ({
    background: '#fff',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      borderBottom: '0.5px solid #777FEB',
      padding: '20px 0',
      maxWidth: '1240px',
      margin: 'auto',

    }
  }),
  container: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      padding: 0,
      margin: 0
    }
  }),
  logoDesk: {
    mr: 2,
    display: { xs: 'none', lg: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  logoMob: {
    mr: 2,
    display: { xs: 'flex', lg: 'none' },
    flexGrow: 1,
  },
  burgerMenu: {
    flexGrow: 1,
    display: { xs: 'flex', lg: 'none' }
  }
}