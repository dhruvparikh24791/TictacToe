var a = 1;
$(document).ready(function() {
    gof = [];

    for (var x = 0; x < 3; x++)
    {
        gof[x] = [];

        for (var y = 0; y < 3; y++)
        {
            gof[x][y] = null;

        }
    }
    $('td').click(function() {


        if ($(this).attr("data-a") === "") {
            if (a === 0)
            {
                a = (a + 1) % 2;
                $(this).css("background-image", "url(img/x.jpg)");
                $(this).attr("data-a", "1");

                var cr = +$(this).attr("data-x");
                var cc = +$(this).attr("data-y");

                gof[cr][cc] = 1;
                $("#current").html("Player O's Chance Now");
                check(cr, cc);


            }
            else {
                a = (a + 1) % 2;
                $(this).css("background-image", "url(img/O.jpg)");
                $(this).attr("data-a", "0");
                var cr = +$(this).attr("data-x");
                var cc = +$(this).attr("data-y");
                gof[cr][cc] = 0;
                $("#current").html("Player X's Chance Now");
                check(cr, cc);
            }
        }
        else {
            alert("Already selected");
        }


    });
});
function check(currentrow, currentcolumn) {

    if (gof[0][currentcolumn] === 0 && gof[1][currentcolumn] === 0 && gof[2][currentcolumn] === 0) {
        alert("O Wins");
        exitGame();
    } else if (gof[currentrow][0] === 0 && gof[currentrow][1] === 0 && gof[currentrow][2] === 0) {
        alert("O Wins");
        exitGame();
    } else if (gof[0][currentcolumn] === 1 && gof[1][currentcolumn] === 1 && gof[2][currentcolumn] === 1) {
        alert("X Wins");
        exitGame();
    } else if (gof[currentrow][0] === 1 && gof[currentrow][1] === 1 && gof[currentrow][2] === 1) {
        alert("X Wins");
        exitGame();
    } else if (gof[0][0] === 0 && gof[1][1] === 0 && gof[2][2] === 0) {
        alert("O Wins");
        exitGame();
    } else if (gof[0][0] === 1 && gof[1][1] === 1 && gof[2][2] === 1) {
        alert("X Wins");
        exitGame();
    }
    else if (gof[0][2] === 1 && gof[1][1] === 1 && gof[2][0] === 1) {
        alert("X Wins");
        exitGame();
    } else
    if (gof[0][2] === 0 && gof[1][1] === 0 && gof[2][0] === 0) {
        alert("O Wins");
        exitGame();
    }
    else {
        if (checkDraw()) {
            alert("Draw");
            var ans = confirm("do you want to replay?");
            if (ans === true) {
                location.reload();
            }
            else {
                alert("enjoy");

            }
        }


    }




}
;
function checkDraw() {
    ma = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gof[i][j] === null) {
                return false;
            }
            else {
                ma++;
            }
        }
        ;
    }
    ;
    if (ma === 9) {
        return true;
    } else {
        return false;
    }

}
function exitGame() {
    var ans = confirm("do you want to replay?");
    if (ans === true) {
        location.reload();
    }
    else {
        alert("enjoy");

    }
}
;
