var locateWindow = Titanium.UI.createWindow({  
    title:'Locate Us',
    backgroundColor:'#fff'
});

	

var getAnnotations = function() {
	var annotations = new Array();
	var data = TW.Fixtures.allLocations;
	for (var i=0; i<data.length; i++){
		var annotation = Titanium.Map.createAnnotation({
   			latitude: data[i].latitude,
    		longitude: data[i].longitude,
    		title: data[i].name,
    		subtitle: 'Available Copies: 0',
    		pincolor:Titanium.Map.ANNOTATION_RED,
    		animate:true,
    		myid: data[i].id
		});
		annotations.push(annotation);
	}
	return annotations;
}

var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:12.969393, longitude:77.5672999, latitudeDelta:0.5, longitudeDelta:0.5},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations : getAnnotations()
});

locateWindow.add(mapview);
 
