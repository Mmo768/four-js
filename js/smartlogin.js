// ========== validation session ==========
if(correct() == false){
    window.stop();
}


// ========== body load ==========
window.addEventListener('load',function(){
    var textMain = document.querySelector("h1");
    var outlogin = document.querySelector("button[aria-current='page']");

    textMain.innerHTML = `Welcome ${getName()}`;
    outlogin.addEventListener('click',function(){
        deletesession();
        window.location.href = "./index.html";
    });


});



// ========== get session ==========
function getsession(){
    return JSON.parse(localStorage.getItem("session"));
}

// ========== delete session ==========
function deletesession(){
    localStorage.removeItem("session");

}

// ========== get name ==========
function getName(){
    var name;
    var container =  JSON.parse(localStorage.getItem("container"));
    for(i=0;i<container.length;i++){
        if(getsession().email == container[i].email){
            name = container[i].name;
            break;
        }
    }
    return name;
}

// ========== validation session ==========
function correct(){
    var boolean = false;
        if(getsession() != null){
            boolean =  true;
        }
        return boolean;
}