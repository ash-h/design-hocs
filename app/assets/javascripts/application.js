/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  $('.navbar__list-items a').click(function (e) {
    e.preventDefault();
    var target = $(this);
    target.parents('.navbar').find('.active').removeClass('active');
    target.parents('li').addClass('active');
    //target.parents().find('h1:first').text($(this).text());
  });

})
