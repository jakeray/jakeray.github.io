var coal = 0
var activeMining = false;
var miningRate = 1000;
var miningYield = 1;

const mybutton1 = document.getElementById("uncommonSelect");
mybutton1.disabled = true;
mybutton1.style.background='#000000';

const mybutton2 = document.getElementById("rareSelect");
mybutton2.disabled = true
mybutton2.style.background='#000000';

const mybutton3 = document.getElementById("epicSelect");
mybutton3.disabled = true
mybutton3.style.background='#000000';

const mybutton4 = document.getElementById("eliteSelect");
mybutton4.disabled = true
mybutton4.style.background='#000000';

const mybutton5 = document.getElementById("legendarySelect");
mybutton5.disabled = true
mybutton5.style.background='#000000';

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
