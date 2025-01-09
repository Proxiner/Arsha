import '../base/_reset.scss'; //global styles

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>)
}
