import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#50d890',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#d54062',
      },
    },
  });
  

export default createMuiTheme