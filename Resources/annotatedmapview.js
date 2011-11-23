var createAnnotation = function (data) {
	var annotation = Titanium.Map.createAnnotation({
		   			latitude: data.latitude,
		    		longitude: data.longitude,
		    		title: data.name,
		    		pincolor:Titanium.Map.ANNOTATION_RED,
		    		animate:true,
		    		myid: data.id
				});
	return annotation;
}
TW.UI.createAnnotatedMapView = function(params) {

	var getAnnotations = function() {
		var annotations = new Array();
		if(params.annotations) {
			var data = params.annotations;
			for (var i=0; i<data.length; i++){
				var annotation = createAnnotation(data[i]);
				annotations.push(annotation);
			}
		}
		else {
			var location = new TW.Model.Location();
			for (var i=0; i<data.length; i++){
				location = TW.Store.Locations.findLocationById(params[i].locationId);
				var annotation = createAnnotation(location);
				if(params.availableCopies) {
					annotation.subtitle = 'Available Copies: ' + data[i].availableCopies;
				}
				annotations.push(annotation);
			}
		}
		return annotations;
	}
	
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region: {latitude:12.969393, longitude:77.5672999, latitudeDelta:0.5, longitudeDelta:0.5},
		animate:true,
		regionFit:true,
		userLocation:true,
		annotations : getAnnotations()
	});
		
	return mapview;
}