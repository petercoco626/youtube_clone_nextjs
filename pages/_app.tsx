import Header from '@/components/header';
import { SearchProvider } from '@/context/searchContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Header />
      <Component {...pageProps} />
    </SearchProvider>
  );
}
