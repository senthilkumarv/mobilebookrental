var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Locate Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var locateWindow = Titanium.UI.createWindow({  
    title:'Locate Us',
    backgroundColor:'#fff'
});

var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:12.969393, longitude:77.5672999, latitudeDelta:0.5, longitudeDelta:0.5},
	animate:true,
	regionFit:true,
	userLocation:true
});

locateWindow.add(mapview);