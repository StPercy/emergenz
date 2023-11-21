import { useState } from 'react';
import './BooksList.css';
import { useEffect } from 'react';

function BooksList() {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setTimeout(() => {

      setBooks([
        {
          id: 1,
          title: 'JavaScript - das umfassende Handbuch',
          author: 'Philip Ackermann',
          isbn: '978-3836286299',
          rating: 5,
        },
        {
          id: 2,
          title: 'OtherBook - das umfassende Handbuch',
          author: 'Anderson, Anders',
          isbn: '978-3832349874',
          rating: 5,
        },
      ]);
    }, 2000);
  }, []);

  if (books.length === 0) {
    return <div>Keine Bücher gefunden</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Autor</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BooksList;
