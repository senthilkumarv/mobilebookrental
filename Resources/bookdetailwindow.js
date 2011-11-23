TW.UI.createBookDetailWindow = function (params) {
	var data = params.data;
	
	var poster = Ti.UI.createImageView({
		top: 5,
		left: 10,
		height: 100,
		width: 85,
		image: data.posterUrl
	});
	
	var title = Ti.UI.createLabel({
		textAlign: 'left',
		top: 10,
  		left: 100,
		height: 32,
		text: data.title,
		color: '#000',
		font: {fontSize: '14'},
	});
	
	var author = Ti.UI.createLabel({
		text: data.author,
		textAlign: 'left',
		top: 45,
  		left: 100,
		height: 20,
		color: '#333',
		height: 20,
		font: {fontSize: '14'},
	});
	
	var publisher = Ti.UI.createLabel({
		text: data.publisher,
		textAlign: 'left',
		top: 60,
  		left: 100,
		height: 20,
		color: '#333',
		height: 20,
		font: {fontSize: '11'},
	});
	
	var isbn = Ti.UI.createLabel({
		text: 'ISBN: ' + data.isbn,
		top: 75,
  		left: 100,
		height: 20,
		color: '#333',
		font: {fontSize: '11'},
	});
	
	var description = Ti.UI.createLabel({
		text: data.description,
		height: 150,
		top: 110,
		left: 10,
		right: 10,
		color: '#000',
		font: {fontSize: '14'}
	});
	var recommendationLabel = Ti.UI.createLabel({
		text: 'Recommendation',
		top: 270,
		height: 15,
		left: 10,
		font: {fontSize: '14'}
	});
	var recommendationView = TW.UI.createRecommendationView({
		data: TW.Store.Books.findRecommendedBooks(data.bookId),
		top: 295,
		height: 50
	});
	
	var bookDetailView = Ti.UI.createView({
	    height: 400
	});
	bookDetailView.add(recommendationLabel);
	bookDetailView.add(poster);
	bookDetailView.add(title);
	bookDetailView.add(author);
	bookDetailView.add(isbn);
	bookDetailView.add(publisher);
	bookDetailView.add(description);
	bookDetailView.add(recommendationView);
	
	var detailsScrollView = Ti.UI.createScrollView({
		contentHeight:'auto',
		top:0,
	    showVerticalScrollIndicator:true
	})
	
	detailsScrollView.add(bookDetailView);
	
	var bookDetailWindow = Ti.UI.createWindow({
		title: 'Book Detail',
		backgroundColor: '#efefef'
	});
	
	bookDetailWindow.add(detailsScrollView);
	
	return bookDetailWindow;
};
