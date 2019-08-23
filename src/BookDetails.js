import React from 'react'
import BooksApi from './api/BooksApi'
import { Link } from 'react-router-dom'

const Book = (props) => {
  const book = BooksApi.get(
    parseInt(props.match.params.id, 10)
  )
  if (!book) {
    return <div>Sorry, but the book was not found</div>
  }
  return (
    <div>
      <h1>Book Details</h1>
      <h2>Title: {book.title}</h2>
      <h2>Author: {book.author}</h2>
      <Link to='/books'>Back</Link>
    </div>
  )
};

export default Book;
