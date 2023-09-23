(function(){
  chrome.contextMenus.onClicked.addListener(function(itemData) {
    var selectionText = itemData.selectionText;
    if (selectionText){
      chrome.tabs.create({url: `https://www.google.com/search?q=${selectionText}`});
    }
  });

  chrome.contextMenus.create({
    title: 'Search Google for "%s"',
    id: "Search_In_New_Tab_20230924",
    contexts: ['selection']
  });
})();