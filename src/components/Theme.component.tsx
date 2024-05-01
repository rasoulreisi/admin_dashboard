import React from "react";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    direction: "rtl",
    palette: {
      primary: blue,
      secondary: {
        main: "#1e88e5",
      },
      text: { primary: "#000", secondary: "rgb(238, 238, 238)" },
      contrastThreshold: 2,
    },
    typography: {
      fontFamily: [
        "IRANsans",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default Theme;
