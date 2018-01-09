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
					$(".slide-up1").css("top","-55px"); //show slide-up1
					$(".slide-up2").css("top","-108px"); //hide slide-up1
				}
				else{
					$(".slide-up1").css("top","-108px");//hide slide-up1
					$(".slide-up2").css("top","-55px");//show slide-up2
				}
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