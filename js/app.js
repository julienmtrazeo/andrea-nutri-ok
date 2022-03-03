let nav = document.getElementById("navigation");
let liens = document.getElementsByClassName("liensNav");
let icon = document.getElementById("icon");

window.onresize = colorHeader;
window.onload = colorHeader;

function colorHeader() {
  let myWidth = window.innerWidth;

  window.onscroll = function () {
    if (myWidth > 768) {
      if (document.documentElement.scrollTop > 980) {
        nav.style.background = "#23658D";
        liens[0].style.color = "white";
        liens[1].style.color = "white";
        liens[2].style.color = "white";
        liens[3].style.color = "white";
      } else {
        nav.style.background = "#6D9D3A";
        liens[0].style.color = "#23658D";
        liens[1].style.color = "#23658D";
        liens[2].style.color = "#23658D";
        liens[3].style.color = "#23658D";
      }
    } else {
      // pas sûr que cette partie serve mais je fais comme le cours
      nav.style.background = "#6D9D3A";
      liens[0].style.color = "#23658D";
      liens[1].style.color = "#23658D";
      liens[2].style.color = "#23658D";
      liens[3].style.color = "#23658D";
    }
  };
}

function toggleNav() {
  if (nav.className === "") {
    nav.className += "responsive";
  } else {
    nav.className = "";
  }
}

$("html").click(function () {
  if (nav.className === "responsive") {
    nav.className = "";
  }
});

$("#icon").click(function (event) {
  event.stopPropagation();
});

// Smooth Scroll
$("#arrow").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#section-about").offset().top - 50,
    },
    "slow"
  );
});
$(".liensNav:nth-child(1)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#inicio").offset().top + 50,
    },
    "slow"
  );
});
$(".liensNav:nth-child(2)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#section-about").offset().top - 50,
    },
    "slow"
  );
});
$(".liensNav:nth-child(3)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#tarifs").offset().top - 50,
    },
    "slow"
  );
});
$(".liensNav:nth-child(4)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#contact").offset().top - 50,
    },
    "slow"
  );
});
