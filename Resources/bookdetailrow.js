TW.UI.createBookDetailRow = function(params) {
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
		width: 32
	});
	var row = Ti.UI.createTableViewRow({
		height: '55'
	});
	row.data = data;
	row.hasChild = true;
	row.add(poster)
	row.add(bookTitle);
	row.add(author);
	return row;
}
