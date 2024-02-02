import React from 'react';
import {createTheme} from "@mui/material/styles";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {ThemeProvider} from "@mui/material";

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function Theme({children}: { children: React.ReactNode }) {
  document.dir = "rtl"
  const theme = createTheme({
    direction: 'rtl'
  })

  return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </CacheProvider>
  );
}

export default Theme;