var loadButton = document.getElementById('load-more')

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'cats',
    clientId: '[key here]',
    sortBy:'most-commented',
    target: 'lola',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});

feed.run();


loadButton.addEventListener('click', function() {
  feed.next();
});
