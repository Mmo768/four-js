var names = document.querySelectorAll("input")[0];
var emails = document.querySelectorAll("input")[1];
var passwords = document.querySelectorAll("input")[2];
var textRequired = document.querySelectorAll("p")[0];
var textExist = document.querySelectorAll("p")[1];
var Success = document.querySelectorAll("p")[2];
var btn = document.querySelector("button");


var container = [];

// ========== sign up ==========
btn.addEventListener('click',function(){
    var users = {
        name:names.value,
        email:emails.value,
        password:passwords.value
    };

    if(validName() && validEmail() && validPassword() && validExist() == false){
        container.push(users);
        setLocal();
        hiddenAlert();
        reset();

    }else{
        textAlert();
    }

});

// ========== validation email ==========
function reset(){
    emails.value = "";
    passwords.value = ""
}

// ========== validation name ==========
function validName(){
    var regex = /^[A-Za-z0-9_\s]+$/;
    return regex.test(names.value);
}

// ========== validation email ==========
function validEmail(){
    var regex = /^\w+@gmail\.com$/;
    return regex.test(emails.value);
}

// ========== validation password ==========
function validPassword(){
    var regex = /^[A-Za-z0-9_\.\-@]+$/;
    return regex.test(passwords.value);
}

// ========== validation email exist ==========
function validExist(){
    if(JSON.stringify(container).includes(emails.value)){
        return true;
    }else{
        return false;
    }
};

// ========== visible alert ==========
function textAlert(){
    Success.classList.replace("d-block","d-none");
    if(validName() == false || validEmail() == false || validPassword() == false){
        textRequired.classList.replace("d-none","d-block");
    }else{
        textRequired.classList.replace("d-block","d-none");
        if(validExist() == true){
            textExist.classList.replace("d-none","d-block");
        }else{
            textExist.classList.replace("d-block","d-none");
        };
    };
};

// ========== hidden alert ==========
function hiddenAlert(){
    textRequired.classList.replace("d-block","d-none");
    textExist.classList.replace("d-block","d-none");
    Success.classList.replace("d-none","d-block");
}

// ========== set local storage ==========
function setLocal(){
    localStorage.setItem("container",JSON.stringify(container));
}