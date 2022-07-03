import { Link } from './Home.styled';

const Home = () => {
  return (
    <>
      <h1>Title H1</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </nav>
    </>
  );
};
export default Home;
