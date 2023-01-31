import Header from '@/components/header';
import { SearchProvider } from '@/context/searchContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '@/styles/globals.module.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className={styles.app}>
          <Header />
          <div className={styles.divider} />
          <Component {...pageProps} />
        </div>
      </SearchProvider>
    </QueryClientProvider>
  );
}
