import React from 'react';
import BooksApi from './api/BooksApi';
import { Link } from 'react-router-dom';

const AllBooks = () => (
  <div>
    <ul>
      {
        BooksApi.all().map(b => (
          <li key={b.id}>
            <Link to={`/books/${b.id}`}>{b.title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default AllBooks;
