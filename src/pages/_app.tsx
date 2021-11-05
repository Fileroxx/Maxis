import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>

    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>


          <CssBaseline />
          <ScrollIndicator />
          <Component {...pageProps} />
  </>
  );
}

export default MyApp
