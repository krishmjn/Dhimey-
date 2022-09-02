// for pressigng buttons 
 

for(var i=0;i<document.querySelectorAll(".dhime").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var btntext=this.innerHTML
     
     makesound(btntext);
    })
}

function makesound(key){
    switch(key){
        case "घु":
            var ghu=new Audio("/Sound/Ghu.m4a");
            ghu.play();
            break;
        case "खाो":
                var kho=new Audio("/Sound/Kho.m4a");
                kho.play();
                break;
        case "नाता":
                    var nata=new Audio("/Sound/Na-ta.m4a");
                    nata.play();
                    break;
        case "धया":
            var dhya=new Audio("/Sound/Dhya.m4a");
            dhya.play();
            break;
        default:
            console.log("inavlid key");
            break;
    }
}
// for presssing keys 

addEventListener("keypress",function(event){
    makeKeySound(event.key);
    buttonAnimation(event.key);
})


function makeKeySound(key){
    switch(key){
        case "a":
            var ghu=new Audio("/Sound/Ghu.m4a");
            ghu.play();
            break;
        case "s":
                var kho=new Audio("/Sound/Kho.m4a");
                kho.play();
                break;
        case "d":
                    var nata=new Audio("/Sound/Na-ta.m4a");
                    nata.play();
                    break;
        case "f":
            var dhya=new Audio("/Sound/Dhya.m4a");
            dhya.play();
            break;
         default:
            console.log("inavlid key");   
            break;
    }
}

// for button animation 

function buttonAnimation(key){
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(()=>{
        active.classList.remove("pressed");
    },100)

}
