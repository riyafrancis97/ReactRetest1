const BooksApi = {
    books: [
        {id: 1, title: 'Brief History of Time', author: 'Stephen Hawking'},
        {id: 2, title: 'Ignited Minds', author: 'APJ Abdul Kalam'},
        {id: 3, title: 'Java 2 Complete Reference', author: 'Herbert Schildt'},
        {id: 4, title: 'Da Vinci Code', author: 'Dan Brown'},
        {id: 5, title: 'The C++ Language', author: 'Bjarne Stroustrup'}
    ],
    all: function() { return this.books},
    get: function(id) {
      const isBook = p => p.id === id
      return this.books.find(isBook)
    }
  }
  
  export default BooksApi;
  