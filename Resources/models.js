TW.Model.Books = {}

TW.Model.Book = function() {
	this.bookId = '';
	this.title = '';
	this.isbn = '';
	this.posterUrl = '';
	this.author = '';
	this.publisher = '';
	this.description = '';
	this.poster = function() {
		var posterImage = new Image();
		img.src = (posterUrl == null || posterUrl == undefined)?'default_poster.png':posterUrl;
	}
};
