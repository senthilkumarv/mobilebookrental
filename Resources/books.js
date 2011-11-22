var searchBar = Titanium.UI.createSearchBar({
    height:43,
    top:0,
});

var dataForBookListTable = function() {
	Ti.API.debug('inside book list');
	var books = TW.DataAdapter.getBookList();
	var bookData = [];
	for(var i=0;i<books.length;i++) {
		var book = books[i];
		Ti.API.debug(book.title);
		bookData.push({title: book.title});
	}
	return bookData;
};

var bookList = Titanium.UI.createTableView({
	data: dataForBookListTable(),
	search: searchBar
});


var booksWindow = Titanium.UI.createWindow({  
    title:'Books',
    backgroundColor:'#fff'
});


booksWindow.add(bookList);