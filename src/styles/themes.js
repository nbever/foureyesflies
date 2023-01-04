import { createTheme } from '@mui/material/styles';
import { grey, red, yellow, blue, lightGreen} from '@mui/material/colors';

import JurassicKaiTtf from '../../assets/BungeeInline-Regular.ttf';
import SketchBook from '../../assets/JustMeAgainDownHere-Regular.ttf';
import KaiArt from '../../assets/FrederickatheGreat-Regular.ttf';
import KaiFilms from '../../assets/Limelight-Regular.ttf';

export const kaisFliesTheme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: yellow[50]
    }
  },
  typography: {
    fontFamily: [
      'JurassicKai'
    ].join(','),
    h5: {
      color: red[500]
    },
    body1: {
      color: red[500]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: 'JurassicKai',
          fontWeight: 400,
          src: `url(${JurassicKaiTtf}) format('truetype')`
        }
      }
    }
  }
});

export const artTheme = createTheme({
  palette: {
    primary: {
      main: blue[900]
    },
    secondary: {
      main: lightGreen[50]
    }
  },
  typography: {
    fontFamily: [
      'KaiArt'
    ].join(','),
    h5: {
      color: blue[900]
    },
    body1: {
      color: blue[900]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: 'KaiArt',
          fontWeight: 400,
          src: `url(${KaiArt}) format('truetype')`
        }
      }
    }
  }
});

export const filmTheme = createTheme({
  palette: {
    secondary: {
      main: grey[900]
    },
    primary: {
      main: yellow[600]
    }
  },
  typography: {
    fontFamily: [
      'KaiFilms'
    ].join(','),
    body1: {
      color: grey[50]
    },
    h5: {
      color: yellow[600]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: 'KaiFilms',
          fontWeight: 400,
          src: `url(${KaiFilms}) format('truetype')`
        }
      }
    }
  }
});

export const malaflyTheme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: grey[100]
    }
  },
  typography: {
    fontFamily: [
      'SketchBook'
    ].join(','),
    fontSize: 20
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: 'SketchBook',
          fontWeight: 400,
          src: `url(${SketchBook}) format('truetype')`
        }
      }
    }
  }
});
