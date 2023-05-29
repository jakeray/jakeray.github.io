var logs = 0;
var coal = 0

var activeSkill = "None"

function chopWood(number){
    activeSkill = "Woodcutting";
    document.getElementById("headerskill").innerHTML = activeSkill;
    logs = logs + number;
    document.getElementById("logs").innerHTML = logs;
};

function mineCoal(number){
    activeSkill = "Mining";
    document.getElementById("headerskill").innerHTML = activeSkill;
    coal = coal + number;
    document.getElementById("coal").innerHTML = coal;
};

var axes = 0;
var pickAxes = 0;

function buyAxes(){
    var axesCost = Math.floor(10 * Math.pow(1.1,axes));    //works out the cost of this axes
    if(logs >= axesCost){                                  //checks that the player can afford the axe
        axes = axes + 1;                                   //increases number of axes
    	logs = logs - axesCost;                            //removes the logs
        document.getElementById('axes').innerHTML = axes;  //updates the number of axes for the user
        document.getElementById('logs').innerHTML = logs;  //updates the number of logs for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next axes
    document.getElementById('axesCost').innerHTML = nextCost;  //updates the axes cost for the user
};

function buyPickAxes(){
    var pickAxesCost = Math.floor(10 * Math.pow(1.1,pickAxes));    //works out the cost of this axes
    if(coal >= pickAxesCost){                                  //checks that the player can afford the axe
        pickAxes = pickAxes + 1;                                   //increases number of axes
    	coal = coal - pickAxesCost;                            //removes the logs
        document.getElementById('pickaxes').innerHTML = pickAxes;  //updates the number of axes for the user
        document.getElementById('coal').innerHTML = coal;  //updates the number of logs for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,pickAxes));       //works out the cost of the next axes
    document.getElementById('pickaxesCost').innerHTML = nextCost;  //updates the axes cost for the user
};

window.setInterval(function(){
	if(activeSkill == "Woodcutting") chopWood(axes);
    if(activeSkill == "Mining") mineCoal(pickAxes);
}, 1000);