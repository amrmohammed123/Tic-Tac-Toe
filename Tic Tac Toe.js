$(document).ready(function(){
	var onePlayer = false, playerOneIsX = false , playerOneScore = 0 , playerTwoScore = 0 , currentPlayer = 1 , winner = "";
	//on choosing one player show one player board
	$("#onePlayer").click(function(){
		onePlayer = true;
		$(".slide-up1").text("Your Turn!");
		$(".slide-up2").text("Computer's Turn!");
		$(".player2").html("Computer<br>0");
		$("#onePlayerBoard").show();
		$("#choosingPlayersBoard").hide();		
	});
	//on choosing two players show two players board
	$("#twoPlayers").click(function(){
		onePlayer = false;
		$(".slide-up1").text("Go Player1!");
		$(".slide-up2").text("Go Player2!");
		$(".player2").html("Player2<br>0");
		$("#twoPlayersBoard").show();
		$("#choosingPlayersBoard").hide();		
	});
	//handle back buttons
	$("div.board p.back").click(function(){
		$("#choosingPlayersBoard").show();
		$("#twoPlayersBoard").hide();		
		$("#onePlayerBoard").hide();		
	});
	//handle x buttons
	$(".x").click(function(){
		$(".slide-up1").css("top","-108px");
		playerOneIsX = true;
		$("#gameBoard").show();
		$("#twoPlayersBoard").hide();		
		$("#onePlayerBoard").hide();
	});
	//handle o buttons
	$(".o").click(function(){
		$(".slide-up1").css("top","-108px");
		playerOneIsX = false;
		$("#gameBoard").show();
		$("#twoPlayersBoard").hide();		
		$("#onePlayerBoard").hide();
	});
	//handle reset button
	$(".reset-all").click(function(){
		playerOneScore = 0;
		playerTwoScore = 0;
		currentPlayer = 1;
		winner = "";
		$(".player1").html("Player1<br>0");
		$(".player2").html("Player2<br>0");
		$(".slide-up1").css("top","-55px");
		$(".slide-up2").css("top","-55px");
		$("td").removeClass("winner");
		$("td").text(""); //clear the game board
		$("#choosingPlayersBoard").show();
		$("#gameBoard").hide();		
	});
	//handle the game board
	$("td").click(function(){		
		//check if the cell is not empty then do nothing
		if($(this).text() != "")
			return;
		//two Players
		if(!onePlayer){ 
			if(playerOneIsX){
				if(currentPlayer == 1){
					currentPlayer = 2;
					$(this).text("X");
				}	
				else{
					currentPlayer = 1;
					$(this).text("O");
				}
			}
			else{
				if(currentPlayer == 1){
					currentPlayer = 2;
					$(this).text("O");
				}	
				else{
					currentPlayer = 1;
					$(this).text("X");
				}
			}
			winner = checkEndOfTheGame();
			if(winner){
				$(".slide-up1").css("top","-55px"); //hide slide-up1
				$(".slide-up2").css("top","-55px"); //hide slide-up1
				if(playerOneIsX){
					if(winner == "X"){
						playerOneScore++;
						$(".player1").html("Player1<br>" + playerOneScore);
						$("#result").html("<p>Player1 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
					else{
						playerTwoScore++;
						$(".player2").html("Player2<br>" + playerTwoScore);
						$("#result").html("<p>Player2 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
				}
				else{
					if(winner == "O"){
						playerOneScore++;
						$(".player1").html("Player1<br>" + playerOneScore);
						$("#result").html("<p>Player1 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
					else{
						playerTwoScore++;
						$(".player2").html("Player2<br>" + playerTwoScore);
						$("#result").html("<p>Player2 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
				}
			}
			else if(draw()){
				$("#result").html("<p>Draw</p>");
				$("#result").show();
				setTimeout(function(){
					currentPlayer = 1;
					winner = "";
					$("#result").hide();
					$("td").text(""); //clear the game board
					$(".slide-up1").css("top","-108px");
					$(".slide-up2").css("top","-55px");
				},1000);
			}
			else{
				if(currentPlayer == 2){
					$(".slide-up1").css("top","-55px"); //hide slide-up1
					$(".slide-up2").css("top","-108px"); //show slide-up1
				}
				else{
					$(".slide-up1").css("top","-108px");//show slide-up1
					$(".slide-up2").css("top","-55px");//hide slide-up2
				}
			}
		}
		else{ //one Player
			if(playerOneIsX){
				$(this).text("X");
			}
			else{
				$(this).text("O");
			}
			//check if player 1 won
			winner = checkEndOfTheGame();
			if(winner){
				$(".slide-up1").css("top","-55px"); //hide slide-up1
				$(".slide-up2").css("top","-55px"); //hide slide-up1
				if(playerOneIsX){
					if(winner == "X"){
						playerOneScore++;
						$(".player1").html("Player1<br>" + playerOneScore);
						$("#result").html("<p>Player1 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
					else{
						playerTwoScore++;
						$(".player2").html("Computer<br>" + playerTwoScore);
						$("#result").html("<p>Computer Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
				}
				else{
					if(winner == "O"){
						playerOneScore++;
						$(".player1").html("Player1<br>" + playerOneScore);
						$("#result").html("<p>Player1 Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
					else{
						playerTwoScore++;
						$(".player2").html("Computer<br>" + playerTwoScore);
						$("#result").html("<p>Computer Won</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").removeClass("winner");
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}
				}
			}
			else if(draw()){
				$("#result").html("<p>Draw</p>");
				$("#result").show();
				setTimeout(function(){
					currentPlayer = 1;
					winner = "";
					$("#result").hide();
					$("td").text(""); //clear the game board
					$(".slide-up1").css("top","-108px");
					$(".slide-up2").css("top","-55px");
				},1000);
			}
			else{
				$(".slide-up1").css("top","-55px");//hide slide-up1
				$(".slide-up2").css("top","-108px");//show slide-up2
				$("td").css("pointer-events","none");
				setTimeout(function(){
					$(".slide-up1").css("top","-108px");//show slide-up1
					$(".slide-up2").css("top","-55px");//hide slide-up2
					if(playerOneIsX)
						play("O");
					else
						play("X");
					//check if the computer won
					winner = checkEndOfTheGame();
					if(winner){
						$(".slide-up1").css("top","-55px"); //hide slide-up1
						$(".slide-up2").css("top","-55px"); //hide slide-up1
						if(playerOneIsX){
							if(winner == "X"){
								playerOneScore++;
								$(".player1").html("Player1<br>" + playerOneScore);
								$("#result").html("<p>Player1 Won</p>");
								$("#result").show();
								setTimeout(function(){
									currentPlayer = 1;
									winner = "";
									$("#result").hide();
									$("td").removeClass("winner");
									$("td").text(""); //clear the game board
									$(".slide-up1").css("top","-108px");
									$(".slide-up2").css("top","-55px");
								},1000);
							}
							else{
								playerTwoScore++;
								$(".player2").html("Computer<br>" + playerTwoScore);
								$("#result").html("<p>Computer Won</p>");
								$("#result").show();
								setTimeout(function(){
									currentPlayer = 1;
									winner = "";
									$("#result").hide();
									$("td").removeClass("winner");
									$("td").text(""); //clear the game board
									$(".slide-up1").css("top","-108px");
									$(".slide-up2").css("top","-55px");
								},1000);
							}
						}
						else{
							if(winner == "O"){
								playerOneScore++;
								$(".player1").html("Player1<br>" + playerOneScore);
								$("#result").html("<p>Player1 Won</p>");
								$("#result").show();
								setTimeout(function(){
									currentPlayer = 1;
									winner = "";
									$("#result").hide();
									$("td").removeClass("winner");
									$("td").text(""); //clear the game board
									$(".slide-up1").css("top","-108px");
									$(".slide-up2").css("top","-55px");
								},1000);
							}
							else{
								playerTwoScore++;
								$(".player2").html("Computer<br>" + playerTwoScore);
								$("#result").html("<p>Computer Won</p>");
								$("#result").show();
								setTimeout(function(){
									currentPlayer = 1;
									winner = "";
									$("#result").hide();
									$("td").removeClass("winner");
									$("td").text(""); //clear the game board
									$(".slide-up1").css("top","-108px");
									$(".slide-up2").css("top","-55px");
								},1000);
							}
						}
					}
					else if(draw()){
						$("#result").html("<p>Draw</p>");
						$("#result").show();
						setTimeout(function(){
							currentPlayer = 1;
							winner = "";
							$("#result").hide();
							$("td").text(""); //clear the game board
							$(".slide-up1").css("top","-108px");
							$(".slide-up2").css("top","-55px");
						},1000);
					}					
					$("td").css("pointer-events","auto");
				},1000);
			}		
		}
	});
});
function checkEndOfTheGame(){
	//check rows
	if($("#0").text() != "" && $("#0").text() == $("#1").text() && $("#0").text() == $("#2").text()){
		$("#0").addClass("winner");
		$("#1").addClass("winner");
		$("#2").addClass("winner");
		return $("#0").text();
	}
	if($("#3").text() != "" && $("#3").text() == $("#4").text() && $("#3").text() == $("#5").text()){
		$("#3").addClass("winner");
		$("#4").addClass("winner");
		$("#5").addClass("winner");
		return $("#3").text();
	}
	if($("#6").text() != "" && $("#6").text() == $("#7").text() && $("#6").text() == $("#8").text()){
		$("#6").addClass("winner");
		$("#7").addClass("winner");
		$("#8").addClass("winner");
		return $("#6").text();
	}
	//check cols
	if($("#0").text() != "" && $("#0").text() == $("#3").text() && $("#0").text() == $("#6").text()){
		$("#0").addClass("winner");
		$("#3").addClass("winner");
		$("#6").addClass("winner");
		return $("#0").text();
	}
	if($("#1").text() != "" && $("#1").text() == $("#4").text() && $("#1").text() == $("#7").text()){
		$("#1").addClass("winner");
		$("#4").addClass("winner");
		$("#7").addClass("winner");
		return $("#1").text();
	}
	if($("#2").text() != "" && $("#2").text() == $("#5").text() && $("#2").text() == $("#8").text()){
		$("#2").addClass("winner");
		$("#5").addClass("winner");
		$("#8").addClass("winner");
		return $("#2").text();
	}
	//check diagonals
	if($("#0").text() != "" && $("#0").text() == $("#4").text() && $("#0").text() == $("#8").text()){
		$("#0").addClass("winner");
		$("#4").addClass("winner");
		$("#8").addClass("winner");
		return $("#0").text();
	}
	if($("#2").text() != "" && $("#2").text() == $("#4").text() && $("#2").text() == $("#6").text()){
		$("#2").addClass("winner");
		$("#4").addClass("winner");
		$("#6").addClass("winner");
		return $("#2").text();
	}
	return "";
}
function draw(){
	return $("#0").text() != "" && $("#1").text() != "" && $("#2").text() != "" &&
		$("#3").text() != "" && $("#4").text() != "" && $("#5").text() != "" &&
		$("#6").text() != "" && $("#7").text() != "" && $("#8").text() != "";
}
function play(s)
{
	var i = 0 , cells = [] , s2;
	if(s == "X")
		s2 = "O";
	else
		s2 = "X";
	//check if the computer can win then do the winning move
	//rows
	if(($("#0").text() == s && $("#1").text() == s && $("#2").text() == "") 
	   || ($("#0").text() == s && $("#2").text() == s && $("#1").text() == "")
	  || ($("#1").text() == s && $("#2").text() == s && $("#0").text() == "")){
		$("#0").text(s);
		$("#1").text(s);
		$("#2").text(s);
		return;
	}
	if(($("#3").text() == s && $("#4").text() == s && $("#5").text() == "")
	   || ($("#3").text() == s && $("#5").text() == s && $("#4").text() == "")
	  || ($("#4").text() == s && $("#5").text() == s && $("#3").text() == "")){
		$("#3").text(s);
		$("#4").text(s);
		$("#5").text(s);
		return;
	}	
	if(($("#6").text() == s && $("#7").text() == s && $("#8").text() == "") 
	   || ($("#6").text() == s && $("#8").text() == s && $("#7").text() == "")
	  || ($("#7").text() == s && $("#8").text() == s && $("#6").text() == "")){
		$("#6").text(s);
		$("#7").text(s);
		$("#8").text(s);
		return;
	}
	//cols
	if(($("#0").text() == s && $("#3").text() == s && $("#6").text() == "") 
	   || ($("#0").text() == s && $("#6").text() == s && $("#3").text() == "")
	  || ($("#3").text() == s && $("#6").text() == s && $("#0").text() == "")){
		$("#0").text(s);
		$("#3").text(s);
		$("#6").text(s);
		return;
	}
	if(($("#1").text() == s && $("#4").text() == s && $("#7").text() == "") 
	   || ($("#1").text() == s && $("#7").text() == s && $("#4").text() == "")
	  || ($("#4").text() == s && $("#7").text() == s && $("#1").text() == "")){
		$("#1").text(s);
		$("#4").text(s);
		$("#7").text(s);
		return;
	}	
	if(($("#2").text() == s && $("#5").text() == s && $("#8").text() == "") 
	   || ($("#2").text() == s && $("#8").text() == s && $("#5").text() == "")
	  || ($("#5").text() == s && $("#8").text() == s && $("#2").text() == "")){
		$("#2").text(s);
		$("#5").text(s);
		$("#8").text(s);
		return;
	}
	//diagonals
	if(($("#0").text() == s && $("#4").text() == s && $("#8").text() == "") 
	   || ($("#0").text() == s && $("#8").text() == s && $("#4").text() == "")
	  || ($("#4").text() == s && $("#8").text() == s && $("#0").text() == "")){
		$("#0").text(s);
		$("#4").text(s);
		$("#8").text(s);
		return;
	}
	if(($("#2").text() == s && $("#4").text() == s && $("#6").text() == "") 
	   || ($("#2").text() == s && $("#6").text() == s && $("#4").text() == "")
	  || ($("#4").text() == s && $("#6").text() == s && $("#2").text() == "")){
		$("#2").text(s);
		$("#4").text(s);
		$("#6").text(s);
		return;
	}
	//check if the computer about to lose then prevent it
	//rows
	if($("#0").text() == s2 && $("#1").text() == s2 && $("#2").text() == ""){	   
		$("#2").text(s);
		return;
	}
	if($("#0").text() == s2 && $("#2").text() == s2 && $("#1").text() == ""){	   
		$("#1").text(s);
		return;
	}
	if($("#1").text() == s2 && $("#2").text() == s2 && $("#0").text() == ""){	   
		$("#0").text(s);
		return;
	}
	if($("#3").text() == s2 && $("#4").text() == s2 && $("#5").text() == ""){
		$("#5").text(s);
		return;
	}
	if($("#3").text() == s2 && $("#5").text() == s2 && $("#4").text() == ""){
		$("#4").text(s);
		return;
	}
	if($("#4").text() == s2 && $("#5").text() == s2 && $("#3").text() == ""){
		$("#3").text(s);
		return;
	}
	if($("#6").text() == s2 && $("#7").text() == s2 && $("#8").text() == ""){ 
		$("#8").text(s);
		return;
	}
	if($("#6").text() == s2 && $("#8").text() == s2 && $("#7").text() == ""){ 
		$("#7").text(s);
		return;
	}
	if($("#7").text() == s2 && $("#8").text() == s2 && $("#6").text() == ""){ 
		$("#6").text(s);
		return;
	}
	//cols
	if($("#0").text() == s2 && $("#3").text() == s2 && $("#6").text() == ""){ 
		$("#6").text(s);
		return;
	}
	if($("#0").text() == s2 && $("#6").text() == s2 && $("#3").text() == ""){ 
		$("#3").text(s);
		return;
	}
	if($("#3").text() == s2 && $("#6").text() == s2 && $("#0").text() == ""){ 
		$("#0").text(s);
		return;
	}
	if($("#1").text() == s2 && $("#4").text() == s2 && $("#7").text() == ""){ 
		$("#7").text(s);
		return;
	}	
	if($("#1").text() == s2 && $("#7").text() == s2 && $("#4").text() == ""){ 
		$("#4").text(s);
		return;
	}	
	if($("#4").text() == s2 && $("#7").text() == s2 && $("#1").text() == ""){ 
		$("#1").text(s);
		return;
	}	
	if($("#2").text() == s2 && $("#5").text() == s2 && $("#8").text() == ""){ 
		$("#8").text(s);
		return;
	}
	if($("#2").text() == s2 && $("#8").text() == s2 && $("#5").text() == ""){ 
		$("#5").text(s);
		return;
	}
	if($("#5").text() == s2 && $("#8").text() == s2 && $("#2").text() == ""){ 
		$("#2").text(s);
		return;
	}
	//diagonals
	if($("#0").text() == s2 && $("#4").text() == s2 && $("#8").text() == ""){ 
		$("#8").text(s);
		return;
	}
	if($("#0").text() == s2 && $("#8").text() == s2 && $("#4").text() == ""){ 
		$("#4").text(s);
		return;
	}
	if($("#4").text() == s2 && $("#8").text() == s2 && $("#0").text() == ""){ 
		$("#0").text(s);
		return;
	}
	if($("#2").text() == s2 && $("#4").text() == s2 && $("#6").text() == ""){ 
		$("#6").text(s);
		return;
	}
	if($("#2").text() == s2 && $("#6").text() == s2 && $("#4").text() == ""){ 
		$("#4").text(s);
		return;
	}
	if($("#4").text() == s2 && $("#6").text() == s2 && $("#2").text() == ""){ 
		$("#2").text(s);
		return;
	}
	//play randomly
	for(i = 0 ; i < 9 ; i++){
		if($("#" + i).text() == "")
			cells.push(i);
	}
	$("#" + cells[Math.floor(Math.random() * cells.length)]).text(s);
}