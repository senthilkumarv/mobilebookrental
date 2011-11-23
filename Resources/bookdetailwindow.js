TW.UI.createBookDetailWindow = function (params) {
	var data = params.data;
	var bookDetailWindow = Ti.UI.createWindow({
		title: 'Book Detail',
		backgroundColor: '#dfdfdf'
	});
	
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
		height: 'auto',
		top: 110,
		left: 10,
		right: 10,
		color: '#000',
		font: {fontSize: '14'},
		textAlign: 'both'
	});
	
	var recommendationView = TW.UI.createRecommendationView({
 		
	});
	
	bookDetailWindow.add(poster);
	bookDetailWindow.add(title);
	bookDetailWindow.add(author);
	bookDetailWindow.add(isbn);
	bookDetailWindow.add(publisher);
	bookDetailWindow.add(description);
	bookDetailWindow.add(recommendationView);
	return bookDetailWindow;
};
