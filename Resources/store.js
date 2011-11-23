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

TW.Store.Locations.findAll = function() {
	var data = TW.DataAdapter.getLocations();
	var locations = new Array();
	for (var i=0;i<data.length;i++) {
		var location = new TW.Model.Location();
		location.latitude = data[i].latitude;
		location.longitude = data[i].longitude;
		location.name = data[i].name;
		location.locationId = data[i].id;
		locations.push(location);
	};
	return locations;
};

TW.Store.Locations.findLocationById = function(locationid) {
	var locations = TW.Store.Locations.findAll();
	for(var i=0;i<locations.length;i++) {
		if(locations[i].locationId == locationid)	return locations[i];
	}
	return null;
};