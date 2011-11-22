Ti.include('fixtures.js')

TW.DataAdapter.getBookList = function() {
	var data = TW.Fixtures.books;
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
}
