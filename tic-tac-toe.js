window.onload = function (){
	
	var turn = 1;
	
	
	var gridDoc = document.querySelectorAll("#board div");
	
	emptyArr = [];
	
		for ( var i = 0; i < gridDoc.length; i++ ){
			
			gridDoc[i].classList.add("square");
				console.log(gridDoc);
				
				gridDoc[i].addEventListener("click", function(){
					
							
							if (turn == 1){
								
								this.innerHTML = "X";
								this.classList.add("X");
							
							turn = 2;
							
							}
							else{
								this.innerHTML = "O";
								this.classList.add("O");
								
								turn = 1;
									
									
									
								}
								
								



	});
	
		}
		
		
		
	
		
		
		
		
		
		
		
		
		
		
		
		
}