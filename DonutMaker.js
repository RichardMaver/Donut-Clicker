let donutCount = 0;
let clickerCost = 100;
let clickerCount = 0;
let donutButton = document.getElementById("button-1");
let donutResult = document.getElementById("donut-count");
let autoClickerButton = document.getElementById("button-2");
let clickerResult = document.getElementById("auto-clickers");
let restart = document.getElementById("new");
let acc = document.getElementsByClassName("accordion");
let i;
let action = [];

enabled()

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

autoClickerButton.innerHTML = `Buy Auto Clicker For: ${clickerCost}`

autoClickerButton.addEventListener("click", ()=> {
    buyAutoClicker();
    });

donutButton.addEventListener("click", () => {
        clickDonut();
    });

restart.addEventListener("click", () => {
    newGame();
});

    function clickDonut() {
        donutCount++;
        donutResult.innerHTML = (`Donuts: ` + `${donutCount}`);
        enabled()
    }

    function buyAutoClicker() {
        if (donutCount < clickerCost){
            document.getElementById("button-2").disabled = true;
        }
        if(donutCount >= clickerCost) {
            clickerCount++;
            clickerResult.innerHTML = (`Auto Clickers: ${clickerCount}`);
            donutCount = donutCount - clickerCost;
            donutResult.innerHTML = (`Donuts: ` + `${donutCount}`);
            totalAutoClickers();
            enabled()
            autoClick()
        }
        autoClickerButton.innerHTML = `Buy Auto Clicker For: ${clickerCost}`
    } 

function autoClick() {
    action.push(setInterval(function () {clickDonut()}, 1000));
}

function stopAutoClick() {
    for (let i = 0; i < action.length; i++) {
        clearInterval(action [i]);
    }
}

    function totalAutoClickers() {
            if (clickerCount > 0) {
                clickerCost = (clickerCost + Math.round(clickerCost * 0.1));
        }
    }

    function enabled() {
        if (donutCount < clickerCost) {
            document.getElementById("button-2").disabled = true;
        } else {
            document.getElementById("button-2").disabled = false;
        }
    }

    function newGame () {
        console.log('before ' + action)
        donutCount = 0;
        donutResult.innerHTML = (`Donuts: ` + `${donutCount}`);
        clickerCost = 100;
        autoClickerButton.innerHTML = `Buy Auto Clicker For: ${clickerCost}`
        clickerCount = 0;
        clickerResult.innerHTML = (`Auto Clickers: ${clickerCount}`);
        stopAutoClick();
        console.log('after ' + action)
    }