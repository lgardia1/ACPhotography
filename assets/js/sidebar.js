$(document).ready(function() {
  const $burger = $("#burger-nav-icon");
  const $overlay = $("#overlay");
  const $closeIcons = $(".cross-icon");
  const $mobileNav = $(".mobile-nav");

  
  $burger.on("click", function() {
    $mobileNav.addClass("active");
    $overlay.addClass("active");
    $burger.addClass("active");
    $("body").css("overflow", "hidden");
  });


  function closeMenu() {
    $mobileNav.removeClass("active");
    $overlay.removeClass("active");
    $burger.removeClass("active");
    $("body").css("overflow", "auto");
  }

 
  $overlay.on("click", closeMenu);
  $closeIcons.on("click", closeMenu);

 
  $(".mobile-nav .nav__item a").on("click", closeMenu);


  $(document).on("keydown", function(e) {
    if (e.key === "Escape") closeMenu();
  });
});
