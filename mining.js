var coal = 0
var activeMining = false;
var miningRate = 1000;
var miningYield = 1;

const mybutton = document.getElementById("commonSelect");
mybutton.disabled = true
mybutton.style.background='#000000';

function StartSkill(){
    animateBar();
    setInterval(animateBar,miningRate);
    setInterval(mineCoal,miningRate);
}

function mineCoal(){
        document.getElementById("mineCoalButton").disabled = true;
        activeMining = true;
        var ourCoal = generateCoal();
        player.coal += ourCoal;
        document.getElementById("coal").innerHTML = player.coal;
        document.querySelector(".progress-bar").setAttribute("width","100%");

};

function generateCoal(){
    return miningYield;
}

function animateBar(){
    document.querySelector(".progress-bar").animate({width: "100%"}, miningRate)
}


//Progbar.animate(1.0);  // Number from 0.0 to 1.0
