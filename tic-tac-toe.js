window.onload = function (){

	var turn = 1;
	
	var gridDoc = document.querySelectorAll("#board div");
	
	var gridDict = {}

	var gameState = ["", "", "", "", "", "", "", "", ""];


	const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	
    for ( var i = 0; i < gridDoc.length; i++ )
    {
		
		gridDoc[i].classList.add("square");
			
		gridDict[i] = gridDoc[i];
			
        gridDoc[i].addEventListener("click", function()
        {
				
            for (var key in gridDict) 
            {
					
				if (this == gridDoc[key])
						
				{
					gameState[key] = turn;
					console.log(gameState);
							
				}
						
                if 
                (
					gameState[0] == turn && gameState[1] == turn && gameState[2] == turn ||
					gameState[3] == turn && gameState[4] == turn && gameState[5] == turn ||
					gameState[6] == turn && gameState[7] == turn && gameState[8] == turn ||
					gameState[0] == turn && gameState[3] == turn && gameState[6] == turn ||
					gameState[1] == turn && gameState[4] == turn && gameState[7] == turn ||
					gameState[2] == turn && gameState[5] == turn && gameState[8] == turn ||
					gameState[0] == turn && gameState[4] == turn && gameState[8] == turn ||
					gameState[2] == turn && gameState[4] == turn && gameState[6] == turn
                ) 
                { 
							
					let status = document.getElementById("status");
					status.classList.add("you-won");
                    if (turn == 1)
                    {			
						status.textContent = "Congratulations! X is the winner!"; 			
					}	
                    else
                    {		
						status.textContent = "Congratulations! O is the winner!"; 			
					}
				
				}
						
                if (turn == 1)
                {
					this.innerHTML = "X";
					this.classList.add("X");
				    turn = 2;
				}
                else
                {
					this.innerHTML = "O";
					this.classList.add("O");
					turn = 1;	
				}
							
							
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