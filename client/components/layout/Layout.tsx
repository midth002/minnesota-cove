import Navbar from "../navbar";
import Head from "next/head";


const Layout = ({ children }: any) => {
  return (
    <>
        <Head>
        <title>OTE Admin</title>
        <meta name="viewport" content="width=device-width" />
        </Head>
        <Navbar page="about"/>
        <main>{children}</main>
</>
  )
}

export default Layout