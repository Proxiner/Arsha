import Navbar from "@ui/layouts/navbar.jsx"; //visible on any routes & pages
import '../base/_reset.scss'; //global styles

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>)
}
