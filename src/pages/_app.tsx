import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import type { AppProps } from 'next/app';
import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-5W4NKHN9" />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
