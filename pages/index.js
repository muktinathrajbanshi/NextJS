import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="Muktinath Rajbanshi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
    </>
  );
};

export default index;
