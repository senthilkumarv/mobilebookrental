Ti.include('fixtures.js')

TW.DataAdapter.getBooks = function() {
	return TW.Fixtures.books;
};

TW.DataAdapter.getLocations = function() {
	return TW.Fixtures.allLocations;
};

TW.DataAdapter.getRecommendedBooks = function(bookId) {
	var recommendations = TW.Fixtures.recommendedBooks;
	for(var i=0;i<recommendations.length;i++) {
		if(recommendations[i].bookId == bookId) return recommendations[i].recommendedBookId;
	}
	return null;
}

TW.DataAdapter.getAllLocationIds = function(){
	var locations = TW.Fixtures.allLocations;
	var locationIds = new Array()
	for (var i=0; i<locations.length; i++) {
		locationIds.push(locations[i].id);
	}
	return locationIds;
}

TW.DataAdapter.getAvailablityForBook = function(bookId) {
	var availability = {};
	var availabilityData = TW.Fixtures.availabilityDetails;
	for(var i=0; i<availabilityData.length; i++) {
		if(availabilityData[i].bookid === bookId) {
			return availabilityData[i].availability;
		}
	}
	return null;	
}
