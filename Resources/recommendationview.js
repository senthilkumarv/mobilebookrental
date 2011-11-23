TW.UI.createRecommendationView = function(params) {
	var data = params.data;
	var imageWidth = (params.imageWidth == undefined)?'auto':params.imageWidth;
	var imageHeight = (params.imageHeight == undefined)?'auto':params.imageHeight;
	var fetchImages = function() {
		var images = new Array();
		for(var i=0;i<data.length;i++) {
			var rowView = TW.UI.createBookDetailRowView({
				data: data[i],
				height: 55
			});
			images.push(rowView);
		}
		return images;
	};
	var view = Ti.UI.createScrollableView({
    	bottom: params.bottom,
    	height: params.height,
    	left: 10,
    	right: 10,
    	showPagingControl: true,
    	pagingControlColor: '#000',
	});
	
	var init = function() {
		var images = fetchImages();
		view.views = images;
		if(params.top) view.top = params.top;
	}
	init();
	return view;
};
