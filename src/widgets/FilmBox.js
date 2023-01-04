import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {combine, padding, ROW_STYLE, COLUMN_STYLE, HORIZONTAL_CENTER} from '../constant_styles';

const FilmBox = ({film}) => {
  return (
    <Box sx={combine(COLUMN_STYLE, HORIZONTAL_CENTER, {maxWidth: '50%'}, padding(12))}>
      <Typography variant="h5">{film?.title}</Typography>
      <Typography variant="h6" sx={padding(4)}>{film?.subtitle}</Typography>
      <Box sx={combine(COLUMN_STYLE, HORIZONTAL_CENTER, padding(8))}>
        <Typography>{film?.description}</Typography>
        <iframe width="100%" height="315" src={film.link} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Box>
    </Box>
  );
};

Box.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  })
};

export default FilmBox;
