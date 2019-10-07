$(document).ready(function(){

    var round =[];

    $('#submitRound').on("click", function(){
        var hole1 = $('#hole1').val();
        var hole2 = $('#hole2').val();
        var hole3 = $('#hole3').val();
        var hole4 = $('#hole4').val();
        var hole5 = $('#hole5').val();
        var hole6 = $('#hole6').val();
        var hole7 = $('#hole7').val();
        var hole8 = $('#hole8').val();
        var hole9 = $('#hole9').val();
        var hole10 = $('#hole10').val();
        var hole11 = $('#hole11').val();
        var hole12 = $('#hole12').val();
        var hole13 = $('#hole13').val();
        var hole14 = $('#hole14').val();
        var hole15 = $('#hole15').val();
        var hole16 = $('#hole16').val();
        var hole17 = $('#hole17').val();
        var hole18 = $('#hole18').val();

        var roundData = {
            hole1: hole1,
            hole2: hole2,
            hole3: hole3,
            hole4: hole4,
            hole5: hole5,
            hole6: hole6,
            hole7: hole7,
            hole8: hole8,
            hole9: hole9,
            hole10: hole10,
            hole11: hole11,
            hole12: hole12,
            hole13: hole13,
            hole14: hole14,
            hole15: hole15,
            hole16: hole16,
            hole17: hole17,
            hole18: hole18,
        }
        console.log(roundData);

        round.push(roundData);
        var roundObjectData = round[0];
        sessionStorage.setItem("roundData", JSON.stringify(roundObjectData));

        var golferStringData = sessionStorage.getItem("roundData");
        console.log(golferStringData);

        alert("Round Input Successful. Load Data on the My Stats page to view")
            event.preventDefault();

    });

})