import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/about'>
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
}
