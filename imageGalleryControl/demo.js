$(function () {
    'use strict';

    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

    // Load demo images from flickr:
//    $.ajax({
//        url: 'https://api.flickr.com/services/rest/',
//        data: {
//            format: 'json',
//            method: 'flickr.interestingness.getList',
//            api_key: '7617adae70159d09ba78cfec73c13be3'
//        },
//        dataType: 'jsonp',
//        jsonp: 'jsoncallback'
//    }).done(function (result) {

//        var linksContainer = $('#links'),
//            baseUrl;
//        // Add the demo images as links with thumbnails to the page:
//        $.each(result.photos.photo, function (index, photo) {
//            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
//                photo.server + '/' + photo.id + '_' + photo.secret;
//            $('<a/>')
//                .append($('<img>').prop('src', baseUrl + '_s.jpg'))
//                .prop('href', baseUrl + '_b.jpg')
//                .prop('title', photo.title)
//                .attr('data-gallery', '')
//                .appendTo(linksContainer);
//        });
//    });

//    $('#image-gallery-button').on('click', function (event) {
//        event.preventDefault();
//        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
//    });
});
