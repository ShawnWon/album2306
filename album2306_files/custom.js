


$(document).ready(function() {

t = this;
t.detailJson = {pageList:[{title:"封面"},{title:"01-02"},{title:"03-04"},{title:"05-06"},{title:"07-08"},{title:"09-10"},{title:"11-12"},{title:"13-14"},{title:"15-16"},{title:"17-18"},{title:"19-20"},{title:"21-22"},{title:"23-24"},{title:"25-26"},{title:"27-28"},{title:"29-30"},{title:"封底"}]};


var ao=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0});


 $('#fullpage').fullpage({
        //options here
	sectionsColor:['fff'],
	verticalCentered:!0,
	css3:!0,
	lockAnchors:!1,
	scrollingSpeed:1e3,
	scrollHorizontally: false,
	scrollBar:!0,
	afterRender:function(){ao.init()},
	onLeave:function(e,t){ao.init()},
    }); 




});