import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Link href="/about">
          <a>About</a>
        </Link>
      </main>

      <footer>footer</footer>
    </div>
  );
}
