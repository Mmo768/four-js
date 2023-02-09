var emails = document.querySelectorAll("input")[0];
var passwords = document.querySelectorAll("input")[1];
var textRequired = document.querySelectorAll("p")[0];
var incorrect = document.querySelectorAll("p")[1];
var btn = document.querySelector("button");



// ========== login button ==========
btn.addEventListener('click',function(){
    var users = {
        email:emails.value,
        password:passwords.value
    };
    if(validEmail() && validPassword()){
        hiddenAlert();
        if(correct()){
            setLocal(users);
            window.location.href = "./smartlogin.html";
        }
    }else{
        textAlert()
    }
});

// ========== validation email ==========
function validEmail(){
    var regex = /^[A-Za-z0-9_\.\-@]+$/;
    return regex.test(emails.value);
}

// ========== validation password ==========

function validPassword(){
    var regex = /^[A-Za-z0-9_\.\-@]+$/;
    return regex.test(passwords.value);
}

// ========== visible alert ==========
function textAlert(){
    if(validEmail() == false || validPassword() == false){
        textRequired.classList.replace("d-none","d-block");
    }else{
        textRequired.classList.replace("d-block","d-none");
    };
};

// ========== hidden alert ==========
function hiddenAlert(){
    textRequired.classList.replace("d-block","d-none");
    incorrect.classList.replace("d-block","d-none");

}

// ========== set session ==========
function setLocal(index){
    localStorage.setItem("session",JSON.stringify(index));
}

// ========== get storage ==========
function getLocal(){
    return JSON.parse(localStorage.getItem("container"));
}

// ========== validation email and password ==========
function correct(){
    var boolean = false;
    if(getLocal() != null){
        for(i=0; i<getLocal().length;i++){
            if(getLocal()[i].email === emails.value && getLocal()[i].password === passwords.value){
                boolean =  true;
                break;
            }
        }
    }
    if(boolean == false){
        incorrect.classList.replace("d-none","d-block");
    }
    return boolean;
}