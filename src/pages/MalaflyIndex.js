import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link, useOutletContext} from 'react-router-dom';

import {ROW_STYLE, combine} from '../constant_styles';

const MalaflyIndex = () => {

  const index = useOutletContext();

  const buildEntries = () => {

    return index.comics.map((comic, i) => {
      return (
          <Box key={`${i}-linkbox`} sx={combine(ROW_STYLE)}>
            <Box sx={combine({width: '24px'})}>
              <Typography variant="h5">{comic.issue}</Typography>
            </Box>
            <Box sx={{padding: '8px'}}></Box>
            <Typography variant="h5">
                <Link to={`comics/${comic.issue}`}>{comic.title}</Link>
            </Typography>
          </Box>
      );
    });
  };

  const content = index ?
    <Box sx={{paddingLeft: '100px'}}> 
      {buildEntries()}
    </Box>
    :
    <Box>Loading...</Box>;

  return (
    <Box sx={{height: 'calc(100% + 200px)'}}>
      <Typography variant="h5">Malafly Comics</Typography>
      {content}
    </Box>
  );
};

export default MalaflyIndex;
