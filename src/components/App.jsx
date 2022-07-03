import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Products from '../pages/Products';
import BookDetails from '../pages/BookDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}>
        <Route path=":bookId" element={<BookDetails />} />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};
