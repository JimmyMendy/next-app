import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Component {...pageProps} />
      <footer>Im a footer</footer>
    </>
  );
}

export default MyApp;
