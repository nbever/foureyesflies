import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  borderRadius: '200px',
  transition: '100ms',
  border: '0px solid white',
  width: '160px',
  height: '160px',

  ':hover': {
    border: '4px solid white',
    width: '200px',
    height: '200px'
  }
};

const SiteChooserButton = ({theme, setTheme, title}) => {

  const chooseTheme = () => {
    setTheme(theme);
  };

  return (
    <Box 
      sx={{ cursor: 'pointer', opacity: '0.5', transition: '100ms',
        ':hover': { 
          opacity: '1.0' 
        }
      }}
      onClick={chooseTheme}
    >
      <Box sx={style}>
      </Box>
      <Typography variant="h5">
        {title}
      </Typography>
    </Box>
  );
};

export default SiteChooserButton;
