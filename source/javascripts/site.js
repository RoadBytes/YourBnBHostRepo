var show = function (elem) {
  var getHeight = function () {
    elem.style.display = 'block'; // Make it visible
    var height = elem.scrollHeight + 'px'; // Get it's height
    elem.style.display = ''; //  Hide it again
    return height;
  };

  var height = getHeight();
  elem.classList.add('is-visible'); // Make the element visible
  elem.style.height = height; // Update the height

  // Once the transition is complete, remove the inline height so the content can scale responsively
  window.setTimeout(function () {
    elem.style.height = '';
  }, 350);
};

var hide = function (elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + 'px';

  // Set the height back to 0
  window.setTimeout(function () {
    elem.style.height = '0';
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    elem.classList.remove('is-visible');
  }, 350);
};

// Toggle element visibility
var toggle = function (elem) {
  // If the element is visible, hide it
  if (elem.classList.contains('is-visible')) {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

var idempotentToggle = function (elem) {
  // if element is disabled return
  if (elem.getAttribute("disabled") === 'true') { return; }

  // set element disable
  elem.setAttribute("disabled", true);

  toggle(elem, 350);

  window.setTimeout(function () {
    // remove disabled
    elem.removeAttribute("disabled");
  }, 750);
};

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.header__top__menu');
  var button = document.querySelector('.header__menu__display__button');

  button.addEventListener('click', function(e) {
    idempotentToggle(menu);
  });
});
