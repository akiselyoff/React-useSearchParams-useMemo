import { useParams } from 'react-router-dom';
import { getProductById } from '../API/API';

const BookDetails = () => {
  const { bookId } = useParams();

  const book = getProductById(bookId);
  console.log(book);
  console.log(bookId);
  return (
    <div>
      <h2>
        Single book with id: {bookId} and name: {book.name}
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </div>
  );
};

export default BookDetails;
