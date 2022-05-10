import { createTheme } from "@mui/material";

const fifolieTheme = createTheme({
  typography: {
    /*
    fontFamily: ["Arcade Interlaced", "Arcade Normal", "Arcade Rounded"].join(
      ","
    ),
    */
    fontFamily: ["ArcadeClassic"].join(","),
  },
  palette: {
    primary: {
      main: "#D3D3D3",
      light: "#D3D3D3",
    },
    secondary: {
      main: "#D3D3D3",
      light: "#D3D3D3",
    },
  },
});

export default fifolieTheme;
