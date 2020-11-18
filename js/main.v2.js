function navFirst() {
  var elmnt = document.getElementById("navFirst");
  elmnt.scrollIntoView();
}

function navSecond() {
  var elmnt = document.getElementById("navSecond");
  elmnt.scrollIntoView();
}

function navThird() {
  var elmnt = document.getElementById("navThird");
  elmnt.scrollIntoView();
}

function navFourth() {
  var elmnt = document.getElementById("navFourth");
  elmnt.scrollIntoView();
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Change image of pc components on mouse over table */
function changePart1() {
  document.getElementById("pcImage").src = "./images/pc_1.png";
}

function changePart2() {
  document.getElementById("pcImage").src = "./images/pc_2.png";
}

function changePart3() {
  document.getElementById("pcImage").src = "./images/pc_3.png";
}

function changePart4() {
  document.getElementById("pcImage").src = "./images/pc_4.png";
}

function changePart5() {
  document.getElementById("pcImage").src = "./images/pc_5.png";
}

function changePart6() {
  document.getElementById("pcImage").src = "./images/pc_6.png";
}

function changePart7() {
  document.getElementById("pcImage").src = "./images/pc_7.png";
}

function changePart8() {
  document.getElementById("pcImage").src = "./images/pc_8.png";
}

function changePart9() {
  document.getElementById("pcImage").src = "./images/pc_0.png";
}

function removeImage() {
  document.getElementById("pcImage").src = "./images/pc_0.png";
}

/* SELECT/OPTION menu and change content */
function changeOption() {

  var e = document.getElementById("mySelect");
  var korak = e.options[e.selectedIndex].value;
  var x = window.matchMedia("(min-width: 1179px)");

  if (korak == 0) {
    document.getElementById("block-1").style.display = "block";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 0 & x.matches) {
    document.getElementById("bg6").style.height = "597px";
  }

  if (korak == 1) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "block";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 1 & x.matches) {
    document.getElementById("bg6").style.height = "700px";
  }

  if (korak == 2) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "block";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 2 & x.matches) {
    document.getElementById("bg6").style.height = "540px";
  }

  if (korak == 3) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "block";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 3 & x.matches) {
    document.getElementById("bg6").style.height = "640px";
  }

  if (korak == 4) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "block";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 4 & x.matches) {
    document.getElementById("bg6").style.height = "842px";
  }

  if (korak == 5) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "block";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 5 & x.matches) {
    document.getElementById("bg6").style.height = "778px";
  }

  if (korak == 6) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "block";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 6 & x.matches) {
    document.getElementById("bg6").style.height = "818px";
  }

  if (korak == 7) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "block";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 7 & x.matches) {
    document.getElementById("bg6").style.height = "573px";
  }

  if (korak == 8) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "block";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 8 & x.matches) {
    document.getElementById("bg6").style.height = "945px";
  }

  if (korak == 9) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "block";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 9 & x.matches) {
    document.getElementById("bg6").style.height = "540px";
  }

  if (korak == 10) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "block";
    document.getElementById("block-12").style.display = "none";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 10 & x.matches) {
    document.getElementById("bg6").style.height = "540px";
  }

  if (korak == 11) {
    document.getElementById("block-1").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-3").style.display = "none";
    document.getElementById("block-4").style.display = "none";
    document.getElementById("block-5").style.display = "none";
    document.getElementById("block-6").style.display = "none";
    document.getElementById("block-7").style.display = "none";
    document.getElementById("block-8").style.display = "none";
    document.getElementById("block-9").style.display = "none";
    document.getElementById("block-10").style.display = "none";
    document.getElementById("block-11").style.display = "none";
    document.getElementById("block-12").style.display = "block";
    $('.yt_player_iframe').each(function(){youtube_player
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  }
  if (korak == 11 & x.matches) {
    document.getElementById("bg6").style.height = "573px";
  }

}

// Get the modal
var modal = document.getElementById("myModalFirst");
var modaldrugi = document.getElementById("myModalSecond");
var modaltreci = document.getElementById("myModalThird");

// Get the button that opens the modal
var btn = document.getElementById("myBtnFirst");
var btn2 = document.getElementById("myBtnSecond");
var btn3 = document.getElementById("myBtnSecond");

// Get the <span> element that closes the modal
var x = document.getElementById("closeFirst");
var y = document.getElementById("closeSecond");
var z = document.getElementById("closeThird");

// When the user clicks the button, open the modal 
myBtnFirst.onclick = function () {
  modal.style.display = "block";
}
myBtnSecond.onclick = function () {
  modaldrugi.style.display = "block";
}
myBtnThird.onclick = function () {
  modaltreci.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
x.onclick = function () {
  modal.style.display = "none";
}
y.onclick = function () {
  modaldrugi.style.display = "none";
}
z.onclick = function () {
  modaltreci.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modaldrugi) {
    modaldrugi.style.display = "none";
  }
  if (event.target == modaltreci) {
    modaltreci.style.display = "none";
  }
}