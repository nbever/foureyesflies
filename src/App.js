import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import {Outlet, useLocation, useNavigate} from 'react-router-dom';

import SiteChooserButton from './widgets/SiteChooserButton';

import { kaisFliesTheme, malaflyTheme, artTheme, filmTheme } from './styles/themes';
import { KAIS_FLIES_URL, KAIS_ART_URL, KAIS_FILMS_URL, MALAFLY_URL} from './constant_strings';

import FaceIcon from '../assets/4eyesBIG.svg';
import BlueWingedOlive from '../assets/bluewingedolive_sm.png';
import WhitlockFish from '../assets/whitlock_fish_sm.png';
import FilmImage from '../assets/films_sm.png';

import {ROW_STYLE, SPACE_AROUND, COLUMN_STYLE, HORIZONTAL_CENTER, SPACE_BETWEEN, VERTICAL_CENTER, combine} from './constant_styles';

const SMALL_SIZE = '40px';
const LARGE_SIZE = '200px';

const App = ({setTheme}) => {

  const theme = useTheme();
  const location = useLocation();

  const small = location.pathname.length > 2;

  const buttons = [
    {
      link: KAIS_FLIES_URL,
      title: 'Kai\'s Flies',
      theme: kaisFliesTheme,
      icon: BlueWingedOlive
    },
    {
      link: MALAFLY_URL,
      title: 'Malafly',
      theme: malaflyTheme,
      icon: BlueWingedOlive
    },
    {
      link: KAIS_ART_URL,
      title: 'Kai\'s Art',
      theme: artTheme,
      icon: WhitlockFish,
      position: 'left',
      size: 'cover'
    },
    {
      link: KAIS_FILMS_URL,
      title: 'Kai\'s Films',
      theme: filmTheme,
      icon: FilmImage,
      size: 'cover'
    }
  ].map( (button) => {
    return (
      <SiteChooserButton
        small={small}
        icon={button.icon}
        title={button.title}
        link={button.link}
        theme={button.theme}
        setTheme={setTheme}
        position={button.position}
        size={button.size}
        key={`${button.link}-site_button`}
      />
    );
  });

  const sizer = small ? SMALL_SIZE : LARGE_SIZE;

  return (
    <Box>
      <Box sx={combine((small ? ROW_STYLE : COLUMN_STYLE), (small ? SPACE_BETWEEN : SPACE_AROUND))}>
        <Box sx={combine((small ? ROW_STYLE : COLUMN_STYLE), HORIZONTAL_CENTER)}>
          <Box sx={{ borderRadius: `${sizer}`, width: `${sizer}`, height: `${sizer}`, border: `${small ? '2px' : '8px'} solid ${theme.palette.primary.main}`, backgroundColor: 'white', margin: 'auto'}}>
            <SvgIcon component={FaceIcon} inheritViewBox sx={{ fontSize: `${small ? '36px' : '180px'}`}}/>
          </Box>
          <Box sx={combine(ROW_STYLE, HORIZONTAL_CENTER, VERTICAL_CENTER, {padding: '4px'})}>
            <Typography variant={(small ? 'h5' : 'h2')}>Kai B.</Typography>
          </Box>
        </Box>
        <Box sx={combine(ROW_STYLE, HORIZONTAL_CENTER, SPACE_AROUND)}>
          {buttons}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default App;
