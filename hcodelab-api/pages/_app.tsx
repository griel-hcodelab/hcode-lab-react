import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { GlobalsStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <GlobalsStyle />
    <Component {...pageProps} />
    </Layout>
}

export default MyApp
