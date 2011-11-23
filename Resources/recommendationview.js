TW.UI.createRecommendationView = function(params) {
	var data = params.data;
	
	var fetchImages = function() {
		var images = new Array();
		for(var i=0;i<data.length;i++) {
			var image = {
				image: data[i].posterUrl,
				width: (params.imageWidth == undefined)?'auto':params.imageWidth,
				height: (params.imageHeight == undefined)?'auto':params.imageHeight
			};
			images.push(image);
		}
		return images;
	}
	var view = Ti.UI.createCoverFlowView({
    	bottom: 0,
    	height: 130,
    	left: 10,
    	right: 10,
	});
	
	var init = function() {
		var images = fetchImages();
		view.images = images;
		view.selected = (images.length > 1)?1:0;
	}
	init();
	return view;
};
