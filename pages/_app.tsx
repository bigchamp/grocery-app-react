import type { AppProps } from 'next/app'
import { QueryWrapper, ThemeWrapper } from '@components/Wrappers'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryWrapper>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </QueryWrapper>
  )
}
