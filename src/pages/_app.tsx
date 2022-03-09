import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <script
          id="stripe-js"
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWfKjO0BKdBXwwtiWXwXuupTgHpl5RwPg&libraries=places&callback=initMap"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
