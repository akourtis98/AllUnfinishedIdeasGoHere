$(document).ready(function(){
	var i;
	var clickscounter = 0;
	$(".img_container").click(function(){
		clickscounter++;
		$("#placeholder").html(clickscounter);
	})

 var catImages = ["images/cat_picture1.jpg", "images/cat_picture2.jpg", "images/cat_picture3.jpg", "images/cat_picture4.jpg", "images/cat_picture5.jpg", "images/cat_picture6.jpeg"];

 $("#click1").click(function(){
	i = 0;
	swapImg(i);
	});

 $("#click2").click(function(){
	i = 1;
	swapImg(i);
	});

 $("#click3").click(function(){
	i = 2;
	swapImg(i);
	});

 $("#click4").click(function(){
 	i = 3;
	swapImg(i);		
	});

 $("#click5").click(function(){
 	i = 4;
	swapImg(i);		
	});

 $("#click6").click(function(){
 	i = 5;
	swapImg(i);		
	});

 	function swapImg(i){
 		if ( $("#imgId").attr("src") != catImages[i] ){

 		$("#imgId").attr("src", catImages[i]);
 		}
 	}
});
