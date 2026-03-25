function valid(){

    let username=document.getElementById("username").value;
    let usernameError=document.getElementById("userError");

    let password=document.getElementById("password").value;
    let passwordError=document.getElementById("passError");

    let confirmpassword=document.getElementById("confirmpassword").value;
    let confirmpasswordError=document.getElementById("confirmpassError");

    let mobilenumber=document.getElementById("mobilenumber").value;
    let mobilenumbererror=document.getElementById("mobileError");


    if(username.trim()==""){
        usernameError.innerHTML="***username should not be blank"
        return false;
    }else if(username.trim().length<3 || username.trim().length<6)
    {
        usernameError.innerHTML="**username min charcter 3 & max 6"
        return false;
    }else if(password.trim()==""){

        passwordError.innerHTML="***password should not be blank"
        return false;    
    }else if(confirmpassword.trim()==""){

        confirmpasswordError.innerHTML="***confirm password should not be blank"
        return false;
    }else if(password.trim()!= confirmpassword.trim()==""){

        confirmpasswordError.innerHTML="*** password & confirm password should be same"
        return false;    
    }else if(mobilenumber.trim()==""){

        mobilenumberError.innerHTML="*** mobile number should be blank"
        return false;
    }else if(mobilenumber.trim().length<9 || username.trim().length<14)
        {
            mobilenumbererror.innerHTML="**username min charcter 9 & max 14"
            return false; 
        }      
    return true;

}