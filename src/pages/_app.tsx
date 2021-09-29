import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
          <CssBaseline />
          <Component {...pageProps} />
  </>
  );
}

export default MyApp
