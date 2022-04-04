import { AppProps } from 'next/app';

import { Meta } from '@components/layout/Meta';
import { Footer } from '@templates/Footer';
import { Header } from '@templates/Header';
import { AppConfig } from '@utils/AppConfig';

import '@styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased text-black bg-background">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
