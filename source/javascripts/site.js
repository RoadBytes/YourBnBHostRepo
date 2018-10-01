$(window).on("load resize", function(e) {
  var menuToggle = $(".header__menu__display__button").unbind();

  menuToggle.on("click", function(e) {
    e.preventDefault();

    $(".header__top__menu").slideToggle();
  });

  if ($(window).width() > 624) {
    $(".header__top__menu").show();
  }
});
