"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger"),
      closeElement = document.querySelector(".menu__close"),
      menu = document.querySelector(".menu");
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
  closeElement.addEventListener("click", function () {
    menu.classList.toggle("active");
  }); //выставляем проценты на экране "Что я использую в работе"

  var counters = document.querySelectorAll(".skills__ratings-counter"),
      lines = document.querySelectorAll(".skills__ratings-line span");
  counters.forEach(function (item, i) {
    lines[i].style.width = item.innerHTML;
  });
}); //form

$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $(".overlay, #thanks").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });
});