import {useEffect, useState} from 'react';

import Box from '@mui/material/Box';

import FilmBox from '../widgets/FilmBox';
import BasePage from './BasePage';

import {combine, ROW_STYLE, WRAP, SPACE_AROUND} from '../constant_styles';

const KaisFilms = () => {

  const [index, setIndex] = useState();

  useEffect(() => {

    const doIt = async () => {

      const response = await fetch('assets/filmIndex.json');
      const json = await response.json();

      setIndex(json);
    };

    doIt();

  }, []);

  const content = index?.films?.map((film, index) => {
    return (
      <FilmBox film={film} key={`film-${index}`} />
    );
  });

  return (
    <BasePage title="Kai's Films">
      <Box sx={combine(ROW_STYLE, WRAP, SPACE_AROUND)}>
        {content}
      </Box>
    </BasePage>
  );
};

export default KaisFilms;
