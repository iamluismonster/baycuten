
//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;
var popupStatus1 = 0;
var popupStatus2 = 0;
var popupStatus3 = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
		popupStatus = 1;
		if(popupStatus1==1){
			$("#backgroundPopup1").fadeOut("slow");
			$("#popupContact1").fadeOut("slow");
			popupStatus1 = 0;
		}
		if(popupStatus2==1){
			$("#backgroundPopup2").fadeOut("slow");
			$("#popupContact2").fadeOut("slow");
			popupStatus2 = 0;
		}
		if(popupStatus3==1){
			$("#backgroundPopup3").fadeOut("slow");
			$("#popupContact3").fadeOut("slow");
			popupStatus3 = 0;
		}
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact").height();
	var popupWidth = $("#popupContact").width();
	//centering
	$("#popupContact").css({
		"position": "absolute",
		"top": 90,
		"left": 520
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});



//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;


//loading popup with jQuery magic!
function loadPopup1(){
	//loads popup only if it is disabled
	if(popupStatus1==0){
		$("#backgroundPopup1").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup1").fadeIn("slow");
		$("#popupContact1").fadeIn("slow");
		popupStatus1 = 1;
		if(popupStatus==1){
			$("#backgroundPopup").fadeOut("slow");
			$("#popupContact").fadeOut("slow");
			popupStatus = 0;
		}
		if(popupStatus2==1){
			$("#backgroundPopup2").fadeOut("slow");
			$("#popupContact2").fadeOut("slow");
			popupStatus2 = 0;
		}
			if(popupStatus3==1){
			$("#backgroundPopup3").fadeOut("slow");
			$("#popupContact3").fadeOut("slow");
			popupStatus3 = 0;
		}
	}
}

//disabling popup with jQuery magic!
function disablePopup1(){
	//disables popup only if it is enabled
	if(popupStatus1==1){
		$("#backgroundPopup1").fadeOut("slow");
		$("#popupContact1").fadeOut("slow");
		popupStatus1 = 0;
	}
}

//centering popup
function centerPopup1(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact1").height();
	var popupWidth = $("#popupContact1").width();
	//centering
	$("#popupContact1").css({
		"position": "absolute",
		"top": 85,
		"left": 500
	});
	//only need force for IE6
	
	$("#backgroundPopup1").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button1").click(function(){
		//centering with css
		centerPopup1();
		//load popup
		loadPopup1();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose1").click(function(){
		disablePopup1();
	});
	//Click out event!
	$("#backgroundPopup1").click(function(){
		disablePopup1();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus1==1){
			disablePopup1();
		}
	});

});




//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;


//loading popup with jQuery magic!
function loadPopup2(){
	//loads popup only if it is disabled
	if(popupStatus2==0){
		$("#backgroundPopup2").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup2").fadeIn("slow");
		$("#popupContact2").fadeIn("slow");
		popupStatus2 = 1;
		if(popupStatus1==1){
			$("#backgroundPopup1").fadeOut("slow");
			$("#popupContact1").fadeOut("slow");
			popupStatus1 = 0;
		}
		if(popupStatus==1){
			$("#backgroundPopup").fadeOut("slow");
			$("#popupContact").fadeOut("slow");
			popupStatus = 0;
		}
			if(popupStatus3==1){
			$("#backgroundPopup3").fadeOut("slow");
			$("#popupContact3").fadeOut("slow");
			popupStatus3 = 0;
		}
	}
}

//disabling popup with jQuery magic!
function disablePopup2(){
	//disables popup only if it is enabled
	if(popupStatus2==1){
		$("#backgroundPopup2").fadeOut("slow");
		$("#popupContact2").fadeOut("slow");
		popupStatus2 = 0;
	}
}

//centering popup
function centerPopup2(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact2").height();
	var popupWidth = $("#popupContact2").width();
	//centering
	$("#popupContact2").css({
		"position": "absolute",
		"top": 130,
		"left": 580
	});
	//only need force for IE6
	
	$("#backgroundPopup2").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button2").click(function(){
		//centering with css
		centerPopup2();
		//load popup
		loadPopup2();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose2").click(function(){
		disablePopup2();
	});
	//Click out event!
	$("#backgroundPopup2").click(function(){
		disablePopup2();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus2==1){
			disablePopup2();
		}
	});

});



//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;


//loading popup with jQuery magic!
function loadPopup3(){
	//loads popup only if it is disabled
	if(popupStatus3==0){
		$("#backgroundPopup3").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup3").fadeIn("slow");
		$("#popupContact3").fadeIn("slow");
		popupStatus3 = 1;
		if(popupStatus1==1){
			$("#backgroundPopup1").fadeOut("slow");
			$("#popupContact1").fadeOut("slow");
			popupStatus1 = 0;
		}
		if(popupStatus==1){
			$("#backgroundPopup").fadeOut("slow");
			$("#popupContact").fadeOut("slow");
			popupStatus = 0;
		}
			if(popupStatus==1){
			$("#backgroundPopup").fadeOut("slow");
			$("#popupContact").fadeOut("slow");
			popupStatus = 0;
		}
	}
}

//disabling popup with jQuery magic!
function disablePopup3(){
	//disables popup only if it is enabled
	if(popupStatus3==1){
		$("#backgroundPopup3").fadeOut("slow");
		$("#popupContact3").fadeOut("slow");
		popupStatus3 = 0;
	}
}

//centering popup
function centerPopup3(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact3").height();
	var popupWidth = $("#popupContact3").width();
	//centering
	$("#popupContact3").css({
		"position": "absolute",
		"top": 300,
		"left": 500
	});
	//only need force for IE6
	
	$("#backgroundPopup3").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button3").click(function(){
		//centering with css
		centerPopup3();
		//load popup
		loadPopup3();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose3").click(function(){
		disablePopup3();
	});
	//Click out event!
	$("#backgroundPopup3").click(function(){
		disablePopup3();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus3==1){
			disablePopup3();
		}
	});

});


