import { AppProps } from 'next/app';
import { Provider } from 'overmind-react';

import { Meta } from '@components/layout/Meta';
import { SDKProvider } from '@context/SDK';
import { store } from '@overmind/index';
import { Footer } from '@templates/Footer';
import { Header } from '@templates/Header';
import { AppConfig } from '@utils/AppConfig';

import '@styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider value={store}>
    <SDKProvider>
      <div className="antialiased text-black bg-background">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SDKProvider>
  </Provider>
);

export default MyApp;
