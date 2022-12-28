import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {useNavigate} from 'react-router-dom';

import {combine} from '../constant_styles';

const style = {
  textAlign: 'center',
  margin: 'auto',
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

const smallStyle = {
  textAlign: 'center',
  margin: 'auto',
  borderRadius: '40px',
  transition: '100ms',
  border: '2px solid rgba(255, 0, 0, 0.0)',
  width: '30px',
  height: '30px',

  ':hover': {
    border: '2px solid white',
    width: '30px',
    height: '30px'
  }
};

const SiteChooserButton = ({theme, setTheme, title, small, link, icon, position, size}) => {

  const navTo = useNavigate();

  const chooseTheme = () => {
    setTheme(theme);
    navTo(link);
  };

  return (
    <Box 
      sx={{ cursor: 'pointer', opacity: '0.5', transition: '100ms', padding: '4px',
        ':hover': { 
          opacity: '1.0' 
        }
      }}
      onClick={chooseTheme}
    >
      <Box sx={combine((small ? smallStyle : style), {backgroundImage: `url(${icon})`, backgroundPosition: position ? position : 'center', backgroundSize: size ? size: 'auto'})}>
      </Box>
      <Typography variant={small ? 'text' : 'h5'}>
        {title}
      </Typography>
    </Box>
  );
};

SiteChooserButton.defaultProps = {
  small: false
};

SiteChooserButton.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
  small: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.string,
  size: PropTypes.string
};

export default SiteChooserButton;
