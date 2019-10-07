$(document).ready(function(){
    
    var roundArrayInt=[];

    $('#loadData').on("click", function(){
        $("#myForm").submit();
        var getObj = JSON.parse(sessionStorage.getItem('golferData'));
        var getPic = JSON.parse(sessionStorage.getItem('profilePic'));
        var getRound = JSON.parse(sessionStorage.getItem('roundData'));
        console.log(getObj);
        console.log(getRound);
        var roundArray=[
            getRound.hole1,
            getRound.hole2,
            getRound.hole3,
            getRound.hole4,
            getRound.hole5,
            getRound.hole6,
            getRound.hole7,
            getRound.hole8,
            getRound.hole9,
            getRound.hole10,
            getRound.hole11,
            getRound.hole12,
            getRound.hole13,
            getRound.hole14,
            getRound.hole15,
            getRound.hole16,
            getRound.hole17,
            getRound.hole18,
        ];
        console.log(roundArray);

        var roundArrayInt=[];

        for (i=0; i<roundArray.length; i++){
            var x = parseInt(roundArray[i]);
            roundArrayInt.push(x);
        }

        console.log(roundArrayInt);


        
        //Populate Player Info
        $('#firstName').append(getObj.firstName);
        $('#lastName').append(getObj.lastName);
        $('#stateID').append(getObj.state);
        $('#email').append(getObj.email);
        $('#phone').append(getObj.phone);
        
        var golferLevel = getObj.radio;
        // console.log(golferLevel);
        
        if (golferLevel==1){
            $('#golferLevel').append(" Beginner");   
        }else if (golferLevel==2){
            $('#golferLevel').append(" Intermediate");  
        }else if (golferLevel==3){
            $('#golferLevel').append(" Veteran");  
        }
        
        $('#handicap').append(getObj.handicap);

        //Populate Round Input
        $('#hole1').append(roundArrayInt[0]);
        $('#hole2').append(roundArrayInt[1]);
        $('#hole3').append(roundArrayInt[2]);
        $('#hole4').append(roundArrayInt[3]);
        $('#hole5').append(roundArrayInt[4]);
        $('#hole6').append(roundArrayInt[5]);
        $('#hole7').append(roundArrayInt[6]);
        $('#hole8').append(roundArrayInt[7]);
        $('#hole9').append(roundArrayInt[8]);
        $('#hole10').append(roundArrayInt[9]);
        $('#hole11').append(roundArrayInt[10]);
        $('#hole12').append(roundArrayInt[11]);
        $('#hole13').append(roundArrayInt[12]);
        $('#hole14').append(roundArrayInt[13]);
        $('#hole15').append(roundArrayInt[14]);
        $('#hole16').append(roundArrayInt[15]);
        $('#hole17').append(roundArrayInt[16]);
        $('#hole18').append(roundArrayInt[17]);

        var front9sum = roundArrayInt[0]+
                        roundArrayInt[1]+
                        roundArrayInt[2]+
                        roundArrayInt[3]+
                        roundArrayInt[4]+
                        roundArrayInt[5]+
                        roundArrayInt[6]+
                        roundArrayInt[7]+
                        roundArrayInt[8];
        var back9sum =  roundArrayInt[9]+
                        roundArrayInt[10]+
                        roundArrayInt[11]+
                        roundArrayInt[12]+
                        roundArrayInt[13]+
                        roundArrayInt[14]+
                        roundArrayInt[15]+
                        roundArrayInt[16]+
                        roundArrayInt[17];                
        
        $('#front9').append(front9sum);
        $('#back9').append(back9sum);
        if (front9sum > 36){
            $('#front9').css("background-color", "#66ccff");
        }else if(front9sum < 36){
            $('#front9').css("background-color", "#ff6666");
        }
        if (back9sum > 36){
            $('#back9').css("background-color", "#66ccff");
        }else if(back9sum < 36){
            $('#back9').css("background-color", "#ff6666");
        }
                        

        
        // var fileName = HTMLInputElement.files;
        // console.log(fileName.length);

    //     var yoda = $()
    //     var imgCanvas = document.createElement("canvas");
    //     imgContext = imgCanvas.getContext("2d");
    //     imgCanvas.width = yoda.width;
    //     imgCanvas.height = yoda.height;
    //     imgCanvas.drawImage(yoda, 0, 0, yoda.width, yoda.height);
    //     var imgAsDataURL = imgCanvas.toDataURL("image/png");
    //     sessionStorage.setItem("yoda", imgAsDataURL);
    });

})