Ti.include('namespaces.js')
Ti.include('models.js')
Ti.include('dataadapter.js')
Ti.include('bookdetailrow.js')
Ti.include('books.js')
Ti.include('locate.js')

Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var booksTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Books',
    window:booksWindow
});

var locateTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Locate Us',
    window:locateWindow
});

tabGroup.addTab(booksTab);  
tabGroup.addTab(locateTab);  

tabGroup.open();
