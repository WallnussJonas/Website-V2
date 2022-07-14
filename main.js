$(document).on("click", "a", function() {
    $(this).addClass("active").siblings().removeClass("active")
});

$(window).on("load", () => {
    $("body").addClass("scroll-lock")
    setTimeout(()=> {
      $(".preloader").fadeOut(200);
      $("body").removeClass("scroll-lock")
    }, 2000);
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}
