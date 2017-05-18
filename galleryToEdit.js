"use strict";

/*
  function gallery({ containerWidth, borderW, borderStyle, borderColor}){}
*/

/*---------------------------------Switches-----------------------------------*/
var Sgallery =!0;

/*---------------------------------Measures-----------------------------------*/
var windowH = $(window).outerHeight(true);
var windowW = $(window).innerWidth();

/*----------------------------------Gallery-----------------------------------*/
if (Sgallery) {
  var $img = $('#gallery img');
  var $galleryUl = $('#gallery ul');
  var $ulImg = $('li > div > img');
  var $galleryContainer = $('#gallery > div.gallery-container');
  var galleryContainerW =  960; //$galleryContainer.width();
  var height = 200;
  var border = 0;


  $galleryUl.css({
    "list-style" : "none",
    "display" : "inline-flex",
    "margin-top" : 0 + "px",
    "margin-bottom" : 0 + "px",
    "padding" : 0 + "px"
  });



  /* Set default height for images */
  $img.css({height: height+"px"});

  /* Ajust height & width of images */
  var perfectSize = false, clear = false;
  var imgW, imgTotalW = 0, count = 0;
  var lists = $galleryUl.length;


  //Add border if !null
  if(typeof border == 'number'){
    if(border != null || border != undefined){
      border /=2;
      $galleryContainer.find('img').each(function(i, e){
        $(e).css({ "border" : border + "px solid #3d4" });
      });
    }
  }

  /* Ajust the padding on first AND last element in a row */
  $('#gallery .img-list-container').each(function(i, e){
    $(e).find('img:first').css({
      paddingLeft : 0 + "px",
      marginLeft : 0 + "px",
      borderLeft : 0 + "px"
    });
    $(e).find('img:last').css({
      paddingRight : 0 + "px",
      marginRight : 0 + "px",
      borderRight : 0 + "px"
    });
  });

  /*--------------------------------------------------------------------------*/

  var change = function(el){
    $(el).find('img').each(function(i, g){
      if(imgTotalW < galleryContainerW){
          height = $(g).innerHeight();
          height += .5;
          $(g).innerHeight(height);
      }
      if(imgTotalW > galleryContainerW){
        height = $(g).innerHeight();
        height -= .1;
        $(g).innerHeight(height);
      }
    });
  };

  $galleryUl.each(function(i, e){
    perfectSize = false;

    while(!perfectSize && !(i == lists)){
      imgTotalW = 0; //reset

      /* Total ul img width */
      $(e).find('img').each(function(idx, f){
        imgTotalW += $(f).outerWidth(false);
        imgTotalW = parseInt(imgTotalW);
      });
                  console.log(imgTotalW, i);
      var equal = (imgTotalW === galleryContainerW);

      if(equal){
        perfectSize = true;
      }else{
        var el = $(e);
        change(el);
      }
    }   //end of while
  });  //end $galleryUl.each

  /*--------------------------------------------------------------------------*/

  $("div.img-list-container").each(function(i, e){
    var firstChildHeight = $(e).find('img:first').outerHeight(false);
    $(e).css({ height : firstChildHeight + "px" });
  });

}else{
  $('#gallery').hide();
} // if($gallery)
