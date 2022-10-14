let imgElem1 = document.getElementById('cream');

imgElem1.onmouseover = function(){
    this.src = "img/cloock2.JPG";
};

imgElem1.onmouseout = function(){
    this.src = 'img/1EA97907-5E2A-4E6A-B9B3-97C7AE2814E0_1_201_a.jpeg';
};

let imgElem2 = document.getElementById('gray');

imgElem2.onmouseover = function(){
    this.src = "img/cloock3.JPG";
};

imgElem2.onmouseout = function(){
    this.src = 'img/A76FAF91-9134-4277-838A-F94D71380CDB_1_201_a.jpeg';
};

let imgElem3 = document.getElementById('pair');

imgElem3.onmouseover = function(){
    this.src = "img/cloock6.JPG";
};

imgElem3.onmouseout = function(){
    this.src = 'img/cloock5.JPG';
};



$('.frame').hover(function(){
  $('.picture-gray').toggleClass('gray1');
})




function fadeAnime(){
    $('.introduce').each(function(){
      var elemPos = 
      $(this).offset().top-0;

      var scroll =
      $(window).scrollTop();

      var windowHeight =
      $(window).height();

      if(scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
      }
    });

}


$(window).scroll(function(){
    fadeAnime();
});

$(window).on('load', function(){
    fadeAnime();
});


function fadeAnimeX(){
    $('.picture').each(function(){
      var elemPos = 
      $(this).offset().top-0;

      var scroll =
      $(window).scrollTop();

      var windowHeight =
      $(window).height();

      if(scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
      }
    });

}

function lines() {
  $.each($(".particletext.lines"), function(){
     var linecount = ($(this).width()/50)*10;
     for(var i = 0; i <= linecount; i++) {
        $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}



$(window).scroll(function(){
    fadeAnimeX();
});

$(window).on('load', function(){
    fadeAnimeX();
});


