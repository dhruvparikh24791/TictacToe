var a = 0;
$(document).ready(function() {
    gof = [];
    gcc = 0;
    gcr = 0;
    for (var x = 0; x < 3; x++)
    {
        gof[x] = [];
        for (var y = 0; y < 3; y++)
        {
            gof[x][y] = null;
        }
    }
    if (a === 0)    // USER  - - > X
    {
        $('td').click(function() {
            if (a === 0) {
                console.log("user chance data-a : " + $(this).attr("data-a"));
                if ($(this).attr("data-a") === "") {
                    a = (a + 1) % 2;
                    $(this).css("background-image", "url(img/x.jpg)");
                    $(this).attr("data-a", "1");
                    var cr = +$(this).attr("data-x");
                    var cc = +$(this).attr("data-y");
                    gcc = cc;
                    gcr = cr;
                    gof[cr][cc] = 1;
//                $("#current").html("Computers chance");
                    check(cr, cc);
                    computerchance();
                }
                else if ($(this).attr("data-a") === "1" || "0") {
                    alert("Already Selected!");
                }
            }
        });
    }
    else
        computerchance();
});
function computerchance() {
    if (a === 1) {  // a=1 so computer chance
//COMPUTER - - > O
        a = (a + 1) % 2;
        console.log("Computer is thinking");
        think(gcr, gcc);
    }
}
function check(currentrow, currentcolumn) {
    if (gof[0][currentcolumn] === 0 && gof[1][currentcolumn] === 0 && gof[2][currentcolumn] === 0) {
        $("#winner").html("O Wins!");
        exitGame();
    } else if (gof[currentrow][0] === 0 && gof[currentrow][1] === 0 && gof[currentrow][2] === 0) {
        $("#winner").html("O Wins!");
        exitGame();
    } else if (gof[0][currentcolumn] === 1 && gof[1][currentcolumn] === 1 && gof[2][currentcolumn] === 1) {
        $("#winner").html("X Wins!");
        exitGame();
    } else if (gof[currentrow][0] === 1 && gof[currentrow][1] === 1 && gof[currentrow][2] === 1) {
        $("#winner").html("X Wins!");
        exitGame();
    } else if (gof[0][0] === 0 && gof[1][1] === 0 && gof[2][2] === 0) {
        $("#winner").html("O Wins!");
        exitGame();
    } else if (gof[0][0] === 1 && gof[1][1] === 1 && gof[2][2] === 1) {
        $("#winner").html("X Wins!");
        exitGame();
    }
    else if (gof[0][2] === 1 && gof[1][1] === 1 && gof[2][0] === 1) {
        $("#winner").html("X Wins");
        exitGame();
    } else
    if (gof[0][2] === 0 && gof[1][1] === 0 && gof[2][0] === 0) {
        $("#winner").html("O Wins");
        exitGame();
    }
    else {
        if (checkDraw()) {
            $("#winner").html("Draw");
            console.log("in draw()");
            a = 5;
//            var ans = confirm("do you want to replay?");
//            if (ans === true) {
//
//                exit();
//            }
//            else {
//                alert("enjoy");
//            }
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
    console.log("in exitgame()");
    exit();
}
;
function exit() {
    console.log("in exit()");
    gcc = 0;
    gcr = 0;
//    for (var x = 0; x < 3; x++)
//    {
//        gof[x] = [];
//        for (var y = 0; y < 3; y++)
//        {
//            gof[x][y] = null;
//        }
//    }
    $("#current").html("Game Over");
    a = 5;
    //location.reload();
}
function think(currentrow, currentcolumn) {  //check if user can win, if yes, blockkk
    //attack - currentcolumn
    console.log("Computer is thinking with " + currentrow + currentcolumn);
    //Super Attack row
    if (gof[0][0] === 0 && gof[0][1] === 0 && gof[0][2] === null) {
        gof[0][2] = 0;
        $("td[data-x='0'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 02 ");
        $("td[data-x='0'][data-y='2']").attr("data-a", "0");
        check(0, 1);
    } else
    if (gof[0][0] === 0 && gof[0][1] === null && gof[0][2] === 0) {
        gof[0][1] = 0;
        $("td[data-x='0'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 01");
        $("td[data-x='0'][data-y='1']").attr("data-a", "0");
        check(0, 1);
    } else
    if (gof[0][0] === null && gof[0][1] === 0 && gof[0][2] === 0) {
        gof[0][0] = 0;
        $("td[data-x='0'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 00");
        $("td[data-x='0'][data-y='0']").attr("data-a", "0");
        check(0, 0);
    } else
    if (gof[1][0] === 0 && gof[1][1] === 0 && gof[1][2] === null) {
        gof[1][2] = 0;
        $("td[data-x='1'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 12 ");
        $("td[data-x='1'][data-y='2']").attr("data-a", "0");
        check(1, 2);
    } else
    if (gof[1][0] === 0 && gof[1][1] === null && gof[1][2] === 0) {
        gof[1][1] = 0;
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 11 ");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[1][0] === null && gof[1][1] === 0 && gof[1][2] === 0) {
        gof[1][0] = 0;
        $("td[data-x='1'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 10 ");
        $("td[data-x='1'][data-y='0']").attr("data-a", "0");
        check(1, 0);
    } else
    if (gof[2][0] === 0 && gof[2][1] === null && gof[2][2] === 0) {
        gof[2][1] = 0;
        $("td[data-x='2'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 21 ");
        $("td[data-x='2'][data-y='1']").attr("data-a", "0");
        check(2, 1);
    } else
    if (gof[2][0] === null && gof[2][1] === 0 && gof[2][2] === 0) {
        gof[2][0] = 0;
        $("td[data-x='2'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 20 ");
        $("td[data-x='2'][data-y='0']").attr("data-a", "0");
        check(2, 0);
    } else
    if (gof[2][0] === 0 && gof[2][1] === 0 && gof[2][2] === null) {
        gof[2][2] = 0;
        $("td[data-x='2'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 22 ");
        $("td[data-x='2'][data-y='2']").attr("data-a", "0");
        check(2, 2);
    } else
    //supercolumn
    if (gof[0][0] === 0 && gof[1][0] === 0 && gof[2][0] === null) {
        gof[2][0] = 0;
        $("td[data-x='2'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 20 ");
        $("td[data-x='2'][data-y='0']").attr("data-a", "0");
        check(2, 0);
    } else
    if (gof[0][0] === 0 && gof[1][0] === null && gof[2][0] === 0) {
        gof[1][0] = 0;
        $("td[data-x='1'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 10 ");
        $("td[data-x='1'][data-y='0']").attr("data-a", "0");
        check(1, 0);
    } else
    if (gof[0][0] === null && gof[1][0] === 0 && gof[2][0] === 0) {
        gof[0][0] = 0;
        $("td[data-x='0'][data-y='0']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 00 ");
        $("td[data-x='0'][data-y='0']").attr("data-a", "0");
        check(0, 0);
    } else
    if (gof[0][1] === 0 && gof[1][1] === 0 && gof[2][1] === null) {
        gof[2][1] = 0;
        $("td[data-x='2'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 21 ");
        $("td[data-x='2'][data-y='1']").attr("data-a", "0");
        check(2, 1);
    } else
    if (gof[0][1] === 0 && gof[1][1] === null && gof[2][1] === 0) {
        gof[1][1] = 0;
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 11 ");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[0][1] === null && gof[1][1] === 0 && gof[2][1] === 0) {
        gof[0][1] = 0;
        $("td[data-x='0'][data-y='1']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 01 ");
        $("td[data-x='0'][data-y='1']").attr("data-a", "0");
        check(0, 1);
    } else
    if (gof[0][2] === 0 && gof[1][2] === 0 && gof[2][2] === null) {
        gof[2][2] = 0;
        $("td[data-x='2'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 22 ");
        $("td[data-x='2'][data-y='2']").attr("data-a", "0");
        check(2, 2);
    } else
    if (gof[0][2] === 0 && gof[1][2] === null && gof[2][2] === 0) {
        gof[1][2] = 0;
        $("td[data-x='1'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 12 ");
        $("td[data-x='1'][data-y='2']").attr("data-a", "0");
        check(1, 2);
    } else
    if (gof[0][2] === null && gof[1][2] === 0 && gof[2][2] === 0) {
        gof[0][2] = 0;
        $("td[data-x='0'][data-y='2']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with super 22 ");
        $("td[data-x='0'][data-y='2']").attr("data-a", "0");
        check(0, 2);
    } else
    //original
    if (gof[0][currentcolumn] === 0 && gof[1][currentcolumn] === 0 && gof[2][currentcolumn] === null) {
        gof[2][currentcolumn] = 0;
        $("td[data-x='2'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        console.log("Doing with 2c 2 " + currentcolumn);
        $("td[data-x='2'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(2, currentcolumn);
    } else if (gof[0][currentcolumn] === 0 && gof[1][currentcolumn] === null && gof[2][currentcolumn] === 0) {
        gof[1][currentcolumn] = 0;
        console.log("Doing with 1c 1 " + currentcolumn);
        $("td[data-x='1'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(1, cc);
    } else if (gof[0][currentcolumn] === null && gof[1][currentcolumn] === 0 && gof[2][currentcolumn] === 0) {
        gof[0][currentcolumn] = 0;
        console.log("Doing with0c 0 " + currentcolumn);
        $("td[data-x='0'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(0, currentcolumn);
    }
    //now block - current column
    else
    if (gof[0][currentcolumn] === 1 && gof[1][currentcolumn] === 1 && gof[2][currentcolumn] === null) {
        gof[2][currentcolumn] = 0;
        console.log("Doing with2cc 2 " + currentcolumn);
        $("td[data-x='2'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='2'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(2, currentcolumn);
    } else if (gof[0][currentcolumn] === 1 && gof[1][currentcolumn] === null && gof[2][currentcolumn] === 1) {
        gof[1][currentcolumn] = 0;
        console.log("Doing with1cc 1 " + currentcolumn);
        $("td[data-x='1'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(1, currentcolumn);
    } else if (gof[0][currentcolumn] === null && gof[1][currentcolumn] === 1 && gof[2][currentcolumn] === 1) {
        gof[0][currentcolumn] = 0;
        console.log("Doing with 00cc " + currentcolumn);
        $("td[data-x='0'][data-y='" + currentcolumn + "']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='" + currentcolumn + "']").attr("data-a", "0");
        check(0, currentcolumn);
    }
    //attack  - current row
    else
    if (gof[currentrow][0] === 0 && gof[currentrow][1] === 0 && gof[currentrow][2] === null) {
        gof[currentrow][2] = 0;
        console.log("Doing withc2 " + currentrow + " 2");
        $("td[data-x='" + currentrow + "'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='2']").attr("data-a", "0");
        check(currentrow, 2);
    } else if (gof[currentrow][0] === 0 && gof[currentrow][1] === null && gof[currentrow][2] === 0) {
        gof[currentrow][1] = 0;
        console.log("Doing withc1 " + currentrow + " 1");
        $("td[data-x='" + currentrow + "'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='1']").attr("data-a", "0");
        check(currentrow, 1);
    } else
    if (gof[currentrow][0] === null && gof[currentrow][1] === 0 && gof[currentrow][2] === 0) {
        gof[currentrow][0] = 0;
        console.log("Doing withc0 " + currentrow + " 0");
        $("td[data-x='" + currentrow + "'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='0']").attr("data-a", "0");
        check(currentrow, 0);
    } else
    //block-current column
    if (gof[currentrow][0] === 1 && gof[currentrow][1] === 1 && gof[currentrow][2] === null) {
        gof[currentrow][2] = 0;
        console.log("Doing withcc2 " + currentrow + " 2");
        $("td[data-x='" + currentrow + "'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='2']").attr("data-a", "0");
        check(currentrow, 2);
    } else if (gof[currentrow][0] === 1 && gof[currentrow][1] === null && gof[currentrow][2] === 1) {
        gof[currentrow][1] = 0;
        console.log("Doing withcc1 " + currentrow + " 1");
        $("td[data-x='" + currentrow + "'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='1']").attr("data-a", "0");
        check(currentrow, 1);
    } else
    if (gof[currentrow][0] === null && gof[currentrow][1] === 1 && gof[currentrow][2] === 1) {
        gof[currentrow][0] = 0;
        console.log("Doing withcc0 " + currentrow + " 0");
        $("td[data-x='" + currentrow + "'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='" + currentrow + "'][data-y='0']").attr("data-a", "0");
        check(currentrow, 0);
    }
    else
    //diagonal attack
    if (gof[0][0] === null && gof[1][1] === 0 && gof[2][2] === 0) {
        gof[0][0] = 0;
        console.log("Doing with d00 00");
        $("td[data-x='0'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='0']").attr("data-a", "0");
        check(0, 0);
    } else
    if (gof[0][0] === 0 && gof[1][1] === null && gof[2][2] === 0) {
        gof[1][1] = 0;
        console.log("Doing with d11 11");
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[0][0] === 0 && gof[1][1] === 0 && gof[2][2] === null) {
        gof[2][2] = 0;
        console.log("Doing withd22 22");
        $("td[data-x='2'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='2'][data-y='2']").attr("data-a", "0");
        check(2, 2);
    } else
    //diagonal block
    if (gof[0][0] === null && gof[1][1] === 1 && gof[2][2] === 1) {
        gof[0][0] = 0;
        console.log("Doing with dd00 00");
        $("td[data-x='0'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='0']").attr("data-a", "0");
        check(0, 0);
    } else
    if (gof[0][0] === 1 && gof[1][1] === null && gof[2][2] === 1) {
        gof[1][1] = 0;
        console.log("Doing with dd11 11");
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[0][0] === 1 && gof[1][1] === 1 && gof[2][2] === null) {
        gof[2][2] = 0;
        console.log("Doing with dd22 22");
        $("td[data-x='2'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='2'][data-y='2']").attr("data-a", "0");
        check(2, 2);
    }
    else
    //diagonal 2 attack
    if (gof[0][2] === null && gof[1][1] === 0 && gof[2][0] === 0) {
        gof[0][2] = 0;
        console.log("Doing with d02 02");
        $("td[data-x='0'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='2']").attr("data-a", "0");
        check(0, 2);
    } else
    if (gof[0][2] === 0 && gof[1][1] === null && gof[2][0] === 0) {
        gof[1][1] = 0;
        console.log("Doing with d11 11");
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[0][2] === 0 && gof[1][1] === 0 && gof[2][0] === null) {
        gof[2][0] = 0;
        console.log("Doing with d20 20");
        $("td[data-x='2'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='2'][data-y='0']").attr("data-a", "0");
        check(2, 0);
    } else
    //diagonal block
    if (gof[0][2] === null && gof[1][1] === 1 && gof[2][0] === 1) {
        gof[0][2] = 0;
        console.log("Doing with dd02 02");
        $("td[data-x='0'][data-y='2']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='0'][data-y='2']").attr("data-a", "0");
        check(0, 2);
    } else
    if (gof[0][2] === 1 && gof[1][1] === null && gof[2][0] === 1) {
        gof[1][1] = 0;
        console.log("Doing with dd11 11");
        $("td[data-x='1'][data-y='1']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='1'][data-y='1']").attr("data-a", "0");
        check(1, 1);
    } else
    if (gof[0][2] === 1 && gof[1][1] === 1 && gof[2][0] === null) {
        gof[2][0] = 0;
        console.log("Doing with dd20 20");
        $("td[data-x='2'][data-y='0']").css("background-image", "url(img/O.jpg)");
        $("td[data-x='2'][data-y='0']").attr("data-a", "0");
        check(2, 0);
    }
    else {
        console.log("In random");
        //Random placement
        var r = Math.floor((Math.random() * 3));
        var r1 = Math.floor((Math.random() * 3)); // get number btwn 0 and 2
        // get number btwn 0 and 2
        console.log("r=" + r + " r1=" + r1);
        if (gof[r][r] === null) {
            console.log("doing with r=" + r + "and r=" + r);
            gof[r][r] = 0;
            $("td[data-x='" + r + "'][data-y='" + r + "']").css("background-image", "url(img/O.jpg)");
            $("td[data-x='" + r + "'][data-y='" + r + "']").attr("data-a", "0");
            check(r, r);
        } else {
            if (gof[r][r1] === null) {
                console.log("doing with r=" + r + "and r1=" + r1);
                gof[r][r1] = 0;
                $("td[data-x='" + r + "'][data-y='" + r1 + "']").css("background-image", "url(img/O.jpg)");
                $("td[data-x='" + r + "'][data-y='" + r1 + "']").attr("data-a", "0");
                check(r, r1);
            } else {
                if (gof[r1][r] === null) {
                    console.log("doing with r1=" + r1 + "and r=" + r);
                    gof[r1][r] = 0;
                    $("td[data-x='" + r1 + "'][data-y='" + r + "']").css("background-image", "url(img/O.jpg)");
                    $("td[data-x='" + r1 + "'][data-y='" + r + "']").attr("data-a", "0");
                    check(r1, r);
                } else {
                    if (gof[r1][r1] === null) {
                        console.log("doing with r1=" + r1 + "and r1=" + r1);
                        gof[r1][r1] = 0;
                        $("td[data-x='" + r1 + "'][data-y='" + r1 + "']").css("background-image", "url(img/O.jpg)");
                        $("td[data-x='" + r1 + "'][data-y='" + r1 + "']").attr("data-a", "0");
                        check(r1, r1);
                    }
                    else {
//                         r = Math.floor((Math.random() * 3) - 0.01);
//                         r1 = Math.floor((Math.random() * 3) - 0.01);
//                         console.log("New created random r="+r + " r1="+r1);// get number btwn 0 and 2
                        findEmpty();
                    }
                }
            }
        }
    }
}
function findEmpty() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gof[j][i] === null) {
                gof[j][i] = 0;
                console.log("Doing with ji " + j + i);
                $("td[data-x='" + j + "'][data-y='" + i + "']").css("background-image", "url(img/O.jpg)");
                $(this).attr("data-a", "0");
                check(j, i);
                i = 3;
                j = 3;
            }
            else {
                continue;
            }
        }
    }
}
