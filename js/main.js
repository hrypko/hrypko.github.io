var fullData;

$('#blueimp-gallery').data('useBootstrapModal', false);
$('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#workDetails').on('show.bs.modal', function (e) {
    e.preventDefault();
    var invoker = $(e.relatedTarget);
    var id = invoker[0].id;
    var selectedPortfolio = fullData.portfolios[id];
    buildDetailPortfolio(selectedPortfolio);
    blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
});


$.ajax({
    url: "data.json",
    success: function (data) {
        fullData = jQuery.parseJSON(data);
        buildPortfolios();
        initializeUI();
    }
});

function buildPortfolios() {
    var index;
    for (index = 0; index < fullData.portfolios.length; ++index) {
        var portfolio = fullData.portfolios[index];
        var portfolioHtml = 
            "<figure class=\"effect-chico\"><img src=\"" + portfolio.thumbnail  + "\"/>" +
            "<figcaption><p>" + portfolio.title + "</p><a href=\"#workDetails\" id=\"" + index + "\" data-toggle=\"modal\">View more</a></figcaption></figure>";
        $('#portfolio-grid').append(portfolioHtml);
    }
}

function initializeUI() {
    $('#a-social-fb').attr('href', fullData.facebook_account_url);
    $('#a-social-be').attr('href', fullData.behance_account_url);
    $('#a-social-t').attr('href', fullData.twitter_account_url);
}

function buildDetailPortfolio(portfolio) {
    var linksContainer = $('#links');
    linksContainer.html("");

    var index;
    for (index = 0; index < portfolio.detailImages.length; ++index) {
        var imageUrl = portfolio.detailImages[index].url;
        $('<a/>')
            .append($('<img>').prop('src', imageUrl))
            .prop('href', imageUrl)
            .attr('data-gallery', '')
            .appendTo(linksContainer);    
    }
}