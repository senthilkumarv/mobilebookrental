TW.UI.createBookDetailWindow = function (params) {
	var data = params.data;
	var bookDetailWindow = Ti.UI.createWindow({
		title: 'Book Detail',
		backgroundColor: '#fff'
	});
	
	var poster = Ti.UI.createImageView({
		top: 5,
		left: 10,
		height: 130,
		width: 75,
		image: data.posterUrl
	});
	
	var title = Ti.UI.createLabel({
		textAlign: 'left',
		top: 20,
  		left: 100,
		height: 20,
		text: data.title,
		color: '#eee'
	});
	
	var author = Ti.UI.createLabel({
		text: data.author,
		textAlign: 'left',
		top: 45,
  		left: 100,
		height: 20,
		color: '#ddd',
		height: 20	
	});
	
	var publisher = Ti.UI.createLabel({
		text: data.publisher,
		textAlign: 'left',
		top: 70,
  		left: 100,
		height: 20,
		color: '#bbb',
		height: 20	
	});
	
	var isbn = Ti.UI.createLabel({
		text: data.isbn,
		top: 95,
  		left: 100,
		height: 20,
		color: '#bbb'
	});
	
	var description = Ti.UI.createLabel({
		text: data.description,
		height: 'auto',
		top: 135,
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
