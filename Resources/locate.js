var locateWindow = Titanium.UI.createWindow({  
    title:'Locate Us',
    backgroundColor:'#fff'
});

var params = {};
params.annotations = TW.Fixtures.allLocations;
var mapview = TW.UI.createAnnotatedMapView(params);
locateWindow.add(mapview);