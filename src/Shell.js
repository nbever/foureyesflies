import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import App from './App';
import KaisFlies from './pages/KaisFlies';
import KaisArt from './pages/KaisArt';
import KaisFilms from './pages/KaisFilms';
import Malafly from './pages/Malafly';
import MalaflyIndex from './pages/MalaflyIndex';
import Comic from './pages/Comic';

import { kaisFliesTheme, malaflyTheme, artTheme, filmTheme } from './styles/themes';
import {KAIS_FLIES_URL, KAIS_ART_URL, KAIS_FILMS_URL, MALAFLY_URL} from './constant_strings';

const Shell = () => {
  
  const [theme, setTheme] = useState(kaisFliesTheme);
  const {pathname} = window.location;

  const determineTheme = () => {
    const themeMatch = pathname.includes(KAIS_ART_URL) ? 
      artTheme
      :
      pathname.includes(KAIS_FILMS_URL) ?
        filmTheme
        :
        pathname.includes(MALAFLY_URL) ?
          malaflyTheme
          :
          kaisFliesTheme;

    setTheme(themeMatch);
  };

  useEffect(() => {
    determineTheme();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{height: '100%', width: '100%', overflow: 'none', backgroundColor: theme.palette.secondary.main}}>
          <Routes>
            <Route path="/" element={<App setTheme={setTheme} />}>
              <Route path={KAIS_FLIES_URL} element={<KaisFlies />}>
              </Route>
              <Route path={KAIS_ART_URL} element={<KaisArt />}>
              </Route>
              <Route path={KAIS_FILMS_URL} element={<KaisFilms />}>
              </Route>
              <Route path={`${MALAFLY_URL}/*`} element={<Malafly />}>
                <Route index element={<MalaflyIndex />} />
                <Route path="comics/:issue" element={<Comic />} />
                <Route path="*" element={<Navigate to={`/${MALAFLY_URL}`} />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Shell;
