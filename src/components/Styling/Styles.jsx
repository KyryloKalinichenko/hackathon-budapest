import { createTheme } from "@mui/material/styles";
import { deepOrange, grey } from "@mui/material/colors";


export const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: grey[200],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

export const GridStyle = {
  height: "15rem",
  display: "flex",
  backgroundColor: "whitesmoke",
  margin: "2%"
};
