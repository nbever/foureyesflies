import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import SiteChooserButton from './widgets/SiteChooserButton';

import { kaisFliesTheme, malaflyTheme, artTheme, filmTheme } from './styles/themes';

import FaceIcon from '../assets/4eyesBIG.svg';

import {ROW_STYLE, SPACE_AROUND, COLUMN_STYLE, HORIZONTAL_CENTER, combine} from './constant_styles';

const App = ({setTheme}) => {

  const theme = useTheme();

  return (
    <Box sx={combine(COLUMN_STYLE, SPACE_AROUND)}>
      <Box sx={combine(COLUMN_STYLE, HORIZONTAL_CENTER)}>
        <Box sx={{ borderRadius: '200px', width: '200px', height: '200px', border: `8px solid ${theme.palette.primary.main}`, backgroundColor: 'white', margin: 'auto'}}>
          <SvgIcon component={FaceIcon} inheritViewBox sx={{ fontSize: '200px'}}/>
        </Box>
        <Box sx={combine(ROW_STYLE, HORIZONTAL_CENTER)}>
          <Typography variant="h3">Kai B.</Typography>
        </Box>
      </Box>
      <Box sx={combine(ROW_STYLE, HORIZONTAL_CENTER, SPACE_AROUND)}>
        <SiteChooserButton 
          title="Kai&apos;s Flies" 
          theme={kaisFliesTheme}
          setTheme={setTheme} 
        />
        <SiteChooserButton 
          title="Malafly" 
          theme={malaflyTheme}
          setTheme={setTheme} 
        />
        <SiteChooserButton 
          title="Kai&apos;s Art" 
          theme={artTheme}
          setTheme={setTheme} 
        />
        <SiteChooserButton 
          title="Kai&apos;s Films" 
          theme={filmTheme}
          setTheme={setTheme} 
        />
      </Box>
    </Box>
  );
};

export default App;
