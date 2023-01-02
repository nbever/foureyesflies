import Box from '@mui/material/Box';

import {FULL_HEIGHT, FULL_WIDTH, combine} from '../constant_styles';

const BasePage = ({children}) => {
  return (
    <Box sx={combine(FULL_HEIGHT, FULL_WIDTH)}>
      {children}
    </Box>
  );
};

export default BasePage;
