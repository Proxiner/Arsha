import '../base/_reset.scss'; //global styles
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@ui/layouts/navbar.jsx"), { ssr: false });  //visible on any routes & pages

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>)
}
