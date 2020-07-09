// // ------------ Медленные якоря-------------

// $(document).ready(function () {
//   $("#anchor").on("click", "a", function (event) {
//     event.preventDefault();
//     let id = $(this).attr("href"),
//       top = $(id).offset().top;
//     $("body,html").animate({ scrollTop: top }, 1500);
//   });
// });

// ----------------- Promise ----------
// let mainContanier = document.querySelector(".row");
// console.log(mainContanier);
// let about = document.querySelector(".about");
// let experience = document.querySelector(".experience");
// let skill = document.querySelector(".skill");

// function loadMainContanier(itemBlock) {
//   return new Promise(function (resolve, reject) {
//     let block = new RRR();
//     block.class = itemBlock;
//     mainContanier.appendChild(block);
//     block.addEventListner("load", function () {
//       resolve();
//     });
//     block.addEventListner("Error", function () {
//       reject();
//     });
//   });
// }

// $(window).load(function () {
//   setTimeout(function () {
//     $(".about").show();
//   }, 500);
//   setTimeout(function () {
//     $(".experience").show();
//   }, 1000);
//   setTimeout(function () {
//     $(".skill").show();
//   }, 1500);
//   setTimeout(function () {
//     $(".soft-scills").show();
//   }, 2000);
//   setTimeout(function () {
//     $(".add-skills").show();
//   }, 2500);
// });

$(window).load(function () {
  $(".about").addClass("about-hidden");
  $(".about-hidden").removeClass("about-hidden");
});
$(window).load(function () {
  $(".experience").addClass("experience-hidden");
  $(".experience-hidden").removeClass("experience-hidden");
});
$(window).load(function () {
  $(".skill").addClass("skill-hidden");
  $(".skill-hidden").removeClass("skill-hidden");
});
$(window).load(function () {
  $(".add-skills").addClass("add-skills-hidden");
  $(".add-skills-hidden").removeClass("add-skills-hidden");
});
$(window).load(function () {
  $(".soft-scills").addClass("soft-scills-hidden");
  $(".soft-scills-hidden").removeClass("soft-scills-hidden");
});

$(document).ready(function () {
  $("#slow").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
