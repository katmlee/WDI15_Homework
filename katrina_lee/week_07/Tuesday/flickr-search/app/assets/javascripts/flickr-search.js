$(document).ready(function () {
  var pageCounter=1;
  var pages;
  var maxPage;

  var searchFlickr = function () {
    var query = $('#query').val();

    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

    console.log('searching flickr for', pageCounter);

    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json',
      page: pageCounter++,
    }).done(function (info) {
      console.log(info);
        maxPage = info.photos.pages;
      _.each(info.photos.photo, function (p) {
        var url = generateURL(p);
        var link = generateLink(p);
        var $link = $('<a>', {
          href: link,
          target: "_blank"
        }).appendTo('#results');

        var $img = $('<img>', {
          src: url
        }).appendTo($link);
      });
    });
  };
  var generateLink = function(photo){
    return [
      'https://www.flickr.com/photos/',
      photo.owner,
      '/',
      photo.id,
      '/'
    ].join('');
  };
  var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg', // Change this for different sizes

    ].join('');
  };

  $('#search').on('click', function(){
    $('#results').html("");
    pageCounter=1;
    searchFlickr();
  }); //add the #results.clear


  var throttledFlickr = _.throttle(searchFlickr, 2500);

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (scrollTop + windowHeight > 0.8 * documentHeight) {
      if (pageCounter < maxPage){
      throttledFlickr();
      }
    }
  });
});
