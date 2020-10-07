window.onload = function (){
	
	var turn = 1;
	
	
	var gridDoc = document.querySelectorAll("#board div");
	
	var emptyArr = [];
	
		for ( var i = 0; i < gridDoc.length; i++ ){
			
			gridDoc[i].classList.add("square");
				
				
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
	
		
	
	gridDoc[i].addEventListener("mouseover", function(){
					this.classList.add("hover");
					
					
					
				});
				
				
	gridDoc[i].addEventListener("mouseout", function(){
					this.classList.remove("hover");
	
	
	
		});
		
		
	}	
	
		
		
		
		
		
		
		
		
		
		
		
		

}
