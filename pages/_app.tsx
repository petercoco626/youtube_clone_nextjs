import Header from '@/components/header';
import { SearchProvider } from '@/context/searchContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '@/styles/globals.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <div className={styles.app}>
        <Header />
        <Component {...pageProps} />
      </div>
    </SearchProvider>
  );
}
