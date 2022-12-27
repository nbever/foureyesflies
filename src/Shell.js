import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { kaisFliesTheme } from './styles/themes';
import Box from '@mui/material/Box';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import App from './App';

const Shell = () => {
  
  const [theme, setTheme] = useState(kaisFliesTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{height: '100%', width: '100%', overflow: 'none', backgroundColor: theme.palette.secondary.main}}>
          <Routes>
            <Route path="/" element={<App setTheme={setTheme} />}>
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Shell;
