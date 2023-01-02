import {useState, useEffect} from 'react';
import {useOutletContext, useParams, Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {COLUMN_STYLE, HORIZONTAL_CENTER, RIGID, GROW, 
  SPACE_BETWEEN, ROW_STYLE, FULL_HEIGHT, combine} from '../constant_styles';
import {MALAFLY_URL, COMICS_URL} from '../constant_strings';

const Comic = () => {

  const [comicImage, setComicImage] = useState();
  const index = useOutletContext();
  const {issue} = useParams();

  const issueDetailsIndex = parseFloat(index.comics.findIndex((comic) => {
    return comic.issue === parseFloat(issue);
  }));

  return (
    <Box sx={combine(COLUMN_STYLE, {height: 'calc(100% - 100px)'})}>
      <Box sx={combine(RIGID, HORIZONTAL_CENTER, {height: '40px'})}>
        <Link to={`/${MALAFLY_URL}`}>To List</Link>
      </Box>
      <Box sx={{overflow: 'auto'}}>
        <Typography variant="h5">{index.comics[issueDetailsIndex].title}</Typography>
        <Box sx={{backgroundImage: `url('/assets/malafly/${index.comics[issueDetailsIndex].filename}')`,
          minHeight: '800px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
      </Box>
      <Box sx={combine(HORIZONTAL_CENTER, RIGID, ROW_STYLE, SPACE_BETWEEN, {zIndex: 99})}>
        <Box>
          {
            issueDetailsIndex !== 0 &&
            <Link to={`/${MALAFLY_URL}/${COMICS_URL}/${index?.comics[issueDetailsIndex - 1]?.issue}`}>
              {index?.comics[issueDetailsIndex - 1]?.title}
            </Link>
          }
        </Box>
        <Box>
          {
            issueDetailsIndex !== issueDetailsIndex.length - 1 &&
            <Link to={`/${MALAFLY_URL}/${COMICS_URL}/${index?.comics[issueDetailsIndex + 1]?.issue}`}>
              {index?.comics[issueDetailsIndex + 1]?.title}
            </Link>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Comic;
