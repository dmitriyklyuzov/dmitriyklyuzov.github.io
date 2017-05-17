function countTo(to, element){
	// for(var i=from; i<to; i++){
	// 	setTimeout(
	// 		function(){
	// 			element.html(i);	
	// 		},
	// 		1000);
	// 	}
	
	var i=0;
	
	while(i<to){
		setTimeout(
			function(){
				element.html(i);
				i++;
			},
			1000);
		}
	}
}

// countTo(0, 20, $('#user-number'));