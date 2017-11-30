$(document).ready(function(){
  var mappp = [{
    link: "images/phone1.jpg",
    number: 0
  }, {
     link: "images/phone2.jpg",
    number: 1
  }, {link: "images/phone3.jpg",
    number: 2
  }];
      var click_count = 0;
      $("#imgest").attr("src", mappp[click_count].link);
  $("#btn1").click(function(){
    click_count++;
    if (click_count < 3){
      $("#imgest").attr("src",mappp[click_count].link).stop(true,true).hide().fadeIn();
  }else{
    click_count = 0;
       $("#imgest").attr("src",mappp[click_count].link).stop(true,true).hide().fadeIn();
  }
  });
  $("#btn2").click(function(){
    if (click_count == 1){
      click_count = 0;
       $("#imgest").attr("src", mappp[0].link);
  }else if (click_count == 2){
    click_count = 1;
       $("#imgest").attr("src", mappp[1].link);
  }else if (click_count == 0){
    click_count = 2;
       $("#imgest").attr("src", mappp[2].link);
  }
});

$(".Frontapge_const").hover(
  function () {
      $("#btn1").css("display", "inline-block");
    $("#btn2").css("display", "inline-block");
  },
  function (e) {
    $("#btn1").css("display", "none");
    $("#btn2").css("display", "none");
  }
);
});
