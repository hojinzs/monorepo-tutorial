import type { AppProps } from 'next/app'
import {CacheProvider, EmotionCache} from "@emotion/react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import createEmotionCache from "@/libs/createEmotionCache";
import {theme} from "@/libs/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {

  const {
    Component,
    emotionCache = clientSideEmotionCache,
    ...pageProps
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
