$(document).ready(function(){
    var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        var select = document.getElementById("stateFill");
        
        for (i=0; i<states.length; i++){
            var state = states[i];
            var el = document.createElement("option");
            el.textContent= state;
            el.value = state;
            select.appendChild(el); 
        }

        var golfers = [];
        
        $('#submit').on("click", function() {
            
            //Load input into variables
            var firstName = $('#firstNameVar').val();
            console.log(firstName);

            var lastName = $('#lastNameVar').val();
            console.log(lastName);

            var email = $('#emailVar').val();
            console.log(email);

            var phone = $('#phoneVar').val();
            console.log(phone);

            var handicap = $('#handicapVar').val();
            console.log(handicap);

            var stateCollect = $('#stateFill').val();
            console.log(stateCollect);

            var pwCollect = $('#pwVar').val();
            console.log(pwCollect);

            //Get Uploaed Photo
            var profilePic = document.getElementById("picVar");
            profilePic.addEventListener("load", function(){
                var imgCanvas = document.createElement("canvas"),
                imgContext = imgCanvas.getContext("2d");
                imgCanvas.width = profilePic.width;
                imgCanvas.height = profilePic.height;
                imgContext.drawImage(profilePic, 0, 0, profilePic.width, profilePic.height);
                var imgAsDataURL = imgCanvas.toDataURL("image/png");
                sessionStorage.setItem("profilePic", imgAsDataURL);
            })

            var radioCollect = document.getElementsByName('radioInput');
            console.log(radioCollect);

            var radioFinal;

            for (var i=0, length=radioCollect.length; i<radioCollect.length; i++  ) {
                
                if (radioCollect[i].checked) {
                    radioFinal=radioCollect[i].value;
                }
            }
            console.log(radioFinal);

            var userA = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                handicap: handicap,
                state: stateCollect,
                password: pwCollect,
                radio: radioFinal
            }

            golfers.push(userA);
            var golferObjectData = golfers[0];
            sessionStorage.setItem("golferData", JSON.stringify(golferObjectData));

            var golferStringData = sessionStorage.getItem("golferData");
            
              
            alert("Thank you for signing up with GLP!  Please see the console output for stored values")
            event.preventDefault();
        });

        
})