import Link from 'next/link';

const Home = props => (
  <div>
    <p>Hello Aventine Solutions!</p>
    <Link href="/sell">
      <a>Sell it!</a>
    </Link>
  </div>
);

export default Home;