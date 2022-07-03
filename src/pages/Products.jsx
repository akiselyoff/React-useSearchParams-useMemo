// import { useSearchParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getProducts } from '../API/API';

const Products = () => {
  const books = getProducts();
  // const [searchParams] = useSearchParams();
  // const name = searchParams.get('name');
  // const color = searchParams.get('color');
  // const maxPrice = searchParams.get('maxPrice');

  return (
    <>
      <h1>Products</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`${book.id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Products;
