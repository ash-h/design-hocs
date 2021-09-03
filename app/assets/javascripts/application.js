/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}
const systemNotes = document.querySelectorAll('.timeline ul li');

const toggleSwitch = document.getElementsByClassName('note_toggle')[0];


const checkToggle = () => {
  if (toggleSwitch.checked) {
    for (let x of systemNotes) {
      if (x.classList.contains('system')) {
        x.classList.add("govuk-visually-hidden")
      }
    }
  } else {
    for (let x of systemNotes) {
      if (x.classList.contains('system')) {
        x.classList.remove("govuk-visually-hidden")
      }
    }
  }
}
toggleSwitch.addEventListener('click',()=> {
  checkToggle()
})

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
