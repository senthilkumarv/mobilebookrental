TW.Store.Books.findAll = function() {
	var data = TW.DataAdapter.getBooks();
	var books = new Array();
	for (var i=0;i<data.length;i++) {
		var bookDetail = data[i];
		var book = new TW.Model.Book();
		book.bookId = bookDetail.bookId;
		book.title = bookDetail.title;
		book.isbn = bookDetail.isbn;
		book.posterUrl = bookDetail.posterUrl;
		book.author = bookDetail.author;
		book.publisher = bookDetail.publisher;
		book.description = bookDetail.description;
		books.push(book);
	};
	return books;
};

TW.Store.Books.findBookById = function(bookId) {
	var books = TW.Store.Books.findAll();
	for(var i=0;i<books.length;i++) {
		if(books[i].bookId == bookId)	return books[i];
	}
	return null;
};

TW.Store.Books.findRecommendedBooks = function(bookId) {
	var recommendedBookIds = TW.DataAdapter.getRecommendedBooks(bookId);
	var recommendedBooks = new Array();
	for(var i=0;i<recommendedBookIds.length;i++) {
		recommendedBooks.push(TW.Store.Books.findBookById(recommendedBookIds[i]));
	}
	return recommendedBooks;
}