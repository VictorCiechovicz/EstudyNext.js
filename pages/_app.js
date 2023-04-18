import GlobalStyle from '../src/components/theme/GlobalStyles'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
