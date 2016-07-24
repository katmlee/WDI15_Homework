$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault(); // Don't submit this form for me, I'll do with AJAX

    var movieName = $('#movie').val();
    var movieURL = 'http://omdbapi.com/?t=' + movieName;

    $.ajax(movieURL).done(function (info) { // onreadystatechange with readystate === 4
      $('#poster').attr('src', info.Poster);
    });

    // $.ajax(movieURL, {
    //   success: function (info) { // onreadystatechange with readystate === 4
    //     $('#poster').attr('src', info.Poster);
    //   }
    // });

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', movieURL);
    //
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState !== 4) { return; }
    //
    //   var info = JSON.parse(xhr.responseText);
    //   $('#poster').attr('src', info.Poster);
    // }
    //
    // xhr.send();
  });
});
