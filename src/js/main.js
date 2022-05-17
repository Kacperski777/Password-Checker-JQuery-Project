
// SHOW & HIDE PASSWORD FUNCTIONS

 $("#show").on("click", function(){
        $("#input").attr("type", "text")
        $("#show").attr("style", "display: none")
        $("#hide").attr("style", "display: block")

     });


 $("#hide").on("click", function(){
        $("#input").attr("type", "password")
        $("#hide").attr("style", "display: none")
        $("#show").attr("style", "display: block")

    })


// ----------------------------------------


let letters_numbers_eight = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/
let letters_numbers_special_eight = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let letters_upper_lower_numbers = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let letters_short = /^[a-z]{1,3}$/
let letters_numbers_short = /^[a-z0-9]{1,3}$/
let letters_numbers_long = /^[a-z0-9]{3,12}$/
let letters_long = /^[a-z]{3,12}$/
let numbers_short = /^[0-9]{1,3}$/
let numbers_long = /^[0-9]{3,12}$/
let info = $("#info")
let tips = $('#tips')

$("#submit").on("click", function(){
    let pass = $("#input").val();

    

    if(letters_numbers_eight.test(pass)){
        info.html("Weak/Medium Password - Only Letters + Numbers + At least eight characters")
        tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
        check_weak();
        check_strong();
        info.addClass("medium")
    }else if(letters_upper_lower_numbers.test(pass)){
        info.html("Medium/Strong Password - Upper & Lower Letters + Number")
        tips.html('')
        check_weak();
        check_strong();
        info.addClass("medium")
    }else if(letters_numbers_special_eight.test(pass)){
        info.html("Medium/Strong Password - Letters + Numbers + Special Characters")
        tips.html('')
        check_medium();
        check_weak();
        info.addClass("strong")
     } else if(letters_short.test(pass)){
            info.html("Weak Password - Only letters + short :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
        } else if(letters_long.test(pass)){
            info.html("Weak Password - Only letters :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
        } else if(numbers_short.test(pass)){
            info.html("Weak Password - Only numbers + short :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
        } else if(numbers_long.test(pass)){
            info.html("Weak Password - Only numbers :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
        } else if(letters_numbers_short.test(pass)){
            info.html("Weak Password - Only letters + numbers + short :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
        } else if(letters_numbers_long.test(pass)){
            info.html("Weak Password - Only letters + numbers :(")
            tips.html('<a href="tips.html">Check out some Tips for better Password! </a>')
            check_strong();
            check_medium();
            info.addClass("weak")
    } else if(!pass){
        info.html("Enter Password!")
    }


});


function check_weak(){
    if (info.attr('class') === "py-8 weak"){
        info.removeClass("weak")
    }  else{
        console.log("gucci")
    }
}

function check_medium(){
    if (info.attr('class') == "py-8 medium"){
        info.removeClass("medium")
    }  else{
        console.log("gucci 2")
    }
}

function check_strong(){
    if (info.attr('class') == "py-8 strong"){
        info.removeClass("strong")
    } else{
        console.log("gucci 3")
    }
}