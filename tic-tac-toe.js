window.onload = function (){
	
	var gridDoc = document.querySelectorAll("#board div");
		for ( var i = 0; i < gridDoc.length; i++ ){
			
			gridDoc[i].classList.add("square");
				console.log(gridDoc);
		}
}
