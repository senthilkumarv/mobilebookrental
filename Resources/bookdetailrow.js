TW.UI.createBookDetailRowView = function(params) {
	var data = params.data; 
	var bookTitle = Ti.UI.createLabel({
		text: data.title,
		textAlign: 'left',
		top: 4,
  		left:35,
		height: 20,
		color:'#000',
	});
	var author = Ti.UI.createLabel({
		text: data.author,
		textAlign: 'left',
		left: 35,
		bottom: 4,
		color: '#666',
		height: 20
	});
	
	var poster = Ti.UI.createImageView({
		image: data.posterUrl,
		left: 0,
		top: 0,
		height: 50,
		width: 32,
		backgroundColor: '#fff'
	});
	
	var view = Ti.UI.createView();
	
	var init = function() {
		view.add(poster);
		view.add(bookTitle);
		view.add(author);
		if(params.height) view.height = params.height;
		if(params.top) view.top = params.top;
		if(params.borderColor) { view.borderColor = params.borderColor; view.borderWidth = 1;}
		
	}
	init();
	return view;
}

TW.UI.createBookDetailRow = function(params) {
	var row = Ti.UI.createTableViewRow({
		height: '55',
		data: params.data,
		hasChild: true,
		searchCriteria: params.data.title
	});
	
	var view = TW.UI.createBookDetailRowView(params);
	
	row.add(view);
	
	return row;
}
