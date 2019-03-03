//business logic2323
function Player(pName, Score, total) {
    this.pName = pName;
    this.Score = Score;
    this.Total = total;
}
//prototype for rolling dice
Player.prototype.roll = function () {

    var roll = Math.ceil(Math.random() * 6)
    if (roll === 1) {
        this.Score = 0;
        alert(this.pName + "," + " your turn is over");
    } else {
        this.Score = this.Score + roll;
    };
    return roll;
}
//prototype for displaying total score
Player.prototype.score = function () {
    this.total = 0;
    this.total = + this.Score

}
//create name of both players and a button to start the game
$(function () {
    var playersArr = [];
    //user interface

    $("form#create-player").submit(function (event) {
        event.preventDefault();


        var player1Name = $("input#player1-name").val();
        var player2Name = $("input#player2-name").val();

        var player1 = new Player(player1Name)
        var player2 = new Player(player2Name)

        playersArr.push(player1);
        playersArr.push(player2);

        //display player details
        $(".player1-name").text(player1.pName);
        $(".player1-total-score").html("<span class='player1-total-score'>" + player1.total + "</span>");

        $("button#player1-roll").click(function (event) {
            event.preventDefault();
            var diceRol1 = player1.roll();
            $(".player1-die").text(diceRol1);
            $(".player1-turn-score").text(player1.score);

        });

        $("button#player1-hold").click(function (event) {
            event.preventDefault();
            player1.score();
            $(".player1-total").text(player1.total);
            $(".player1-die").text("");

            if (player1.total >= 10) {
                alert(player1.pName + " Wins!!!")
            }
        });

        $(".player2-name").text(player2.pName);
        $(".player2-total-score").html("<span class='player2-total-score'>" + player2.total + "</span>");

        $("button#player2-roll").click(function (event) {
            event.preventDefault();
            var diceRol2 = player2.roll();

            $(".player2-die").text(diceRol2);
            $(".player2-turn-score").text(player2.score);
        });

        $("button#player2-hold").click(function (event) {
            event.preventDefault();
            player2.score();
            $(".player2-total").text(player2.total);

            if (player2.totalScore >= 100) {
                alert(player2.pName + "Wins!!!!")
            }
        });


    });
});