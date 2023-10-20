import { Box, Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        maxHeight: '400px',
        minHeight: '200px',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', lg: 'row' },
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '100px',
      }}
      color={'primary'}>
      <img
        src="/images/genz-logo.png"
        alt="logo"
        width={60}
        height={40}
      />
      <Typography>© 2023 Copyright Z-corporation</Typography>
    </Paper>
  );
};

export default Footer;
