var searchBar = Titanium.UI.createSearchBar({
    height:43,
    top:0,
});


var bookList = Titanium.UI.createTableView({
	search: searchBar
});

var loadBookList = function() {
	var books = TW.DataAdapter.getBookList();
	for(var i=0;i<books.length;i++) {
		var row = TW.UI.createBookDetailRow(books[i]);
		bookList.appendRow(row);
	}
};

loadBookList();

var booksWindow = Titanium.UI.createWindow({  
    title:'Books',
    backgroundColor:'#fff'
});


booksWindow.add(bookList);