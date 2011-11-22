Ti.include('fixtures.js')

TW.DataAdapter.getBookList = function() {
	var data = TW.Fixtures.books;
	Ti.API.debug(data);
	var books = new Array();
	for (var i=0;i<data.length;i++) {
		var bookDetail = data[i];
		Ti.API.debug('bok'+bookDetail);
		var book = new TW.Model.Book();
		book.bookId = bookDetail.bookId;
		book.title = bookDetail.title;
		Ti.API.debug(bookDetail.title + ' ' + bookDetail.bookId) ;
		book.isbn = bookDetail.isbn;
		book.posterUrl = bookDetail.posterUrl;
		book.author = bookDetail.author;
		book.publisher = bookDetail.publisher;
		book.description = bookDetail.description;
		books.push(book);
	};
	return books;
}
