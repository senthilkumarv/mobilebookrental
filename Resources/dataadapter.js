Ti.include('fixtures.js')

TW.DataAdapter.getBooks = function() {
	return TW.Fixtures.books;
};

TW.DataAdapter.getRecommendedBooks = function(bookId) {
	var recommendations = TW.Fixtures.recommendedBooks;
	for(var i=0;i<recommendations.length;i++) {
		if(recommendations[i].bookId == bookId) return recommendations[i].recommendedBookId;
	}
	return null;
}
