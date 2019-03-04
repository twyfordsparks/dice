function Player(userName) {
    this.userName = userName;
    this.score = 0;
};


function Turn(player) {
    this.total = 0;
    this.randNumber = 0;
    this.player = player;
};


Turn.prototype.diceRoller = function (player1, player2) {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    this.total += randNumber;


    if (randNumber == 1) {
        this.total = 0;
        this.endTurn(player1, player2);
        alert("You rolled 1 Pass the mouse")
        return randNumber;
    } else {
        this.randNumber += randNumber;
        return randNumber;
    };
};

Turn.prototype.endTurn = function (player1, player2) {

    this.player.score += this.total;
    this.total = 0;
    this.randNumber = 0;
    if (this.player === player1) {
        this.player = player2;
        $("#p2").toggleClass("active");
        $("#p1").toggleClass("active");
    } else if (this.player === player2) {
        this.player = player1;
        $("#p2").toggleClass("active");
        $("#p1").toggleClass("active");
    };
};

$(document).ready(function () {
    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");

    var currentTurn = new Turn(player1);

    var total = currentTurn.total;

    $("#p1").hide().show("slow");
    $("#p2").hide().show("slow");
    $("h1").hide().show("slow");
    $("p").hide().show("slow");

    $("#grace").text(total);


    $('#g1').text(player1.score);
    $('#g2').text(player2.score);


    $('#current_player').text(currentTurn.player.userName);


    $("form#roll").submit(function (event) {
        event.preventDefault();


        var result = currentTurn.diceRoller(player1, player2);


        $('#roll').text(result);

        $('#grace').text(currentTurn.total);

        if ((currentTurn.total + currentTurn.player.score) >= 100) {
            if (currentTurn.player == player1) {
                $('#g1').text(currentTurn.total + currentTurn.player.score);
                alert("You got this!");
            } else if (currentTurn.player == player2) {
                $('#g2').text(currentTurn.total + currentTurn.player.score)
                alert("You got this!");
            };
        };
    });

    $("form#end-turn").submit(function (event) {
        event.preventDefault();

        currentTurn.endTurn(player1, player2);



        $('#current_player').text(currentTurn.player.userName);


        $('#g1').text(player1.score);
        $('#g2').text(player2.score);

        $('#roll').text(currentTurn.randNumber);
        $('#grace').text(currentTurn.total);
    });
});