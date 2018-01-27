let Char = new Character("D", "#123331");
console.log(Char);

let GameInstance = new Game;
GameInstance.loop();

/**
var keyOnePressed = false;

//the main function
function draw(){
    if(character.health > 0) {
        ctx.clearRect(0, 0, canvasMap.width, canvasMap.height);
        ctxIS.clearRect(0, 0, canvasIS.width, canvasIS.height);
        ctxLegend.clearRect(0, 0, canvasLegend.width, canvasLegend.height);

        Map.drawMap();
        character.drawStats();
        Inventory.drawInv();
        drawLegend();

        if (character.health <= 0) {
            ctx.font = "50px Arial";
            ctx.fillStyle = "#FF0000";
            ctx.fillText("You are Dead", canvasMap.width / 2 - 150, canvasMap.height / 2);
        }

        requestAnimationFrame(draw);
    }
}

//controls and collision
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 37){
        if(Map.room[character.x][character.y-1] != "#"){
            character.y -= 1;
        }
    } else if(e.keyCode == 38){
        if(Map.room[character.x-1][character.y] != "#"){
            character.x -= 1;
        }
    } else if(e.keyCode == 39){
        if(Map.room[character.x][character.y+1] != "#") {
            character.y += 1;
        }
    } else if(e.keyCode == 40){
        if(Map.room[character.x+1][character.y] != "#") {
            character.x += 1;
        }
    } else if(e.keyCode == 96 || e.keyCode == 48){
        if(Map.room[character.x+1][character.y] === enemie.appearance
                || Map.room[character.x-1][character.y] === enemie.appearance
                || Map.room[character.x][character.y+1] === enemie.appearance
                || Map.room[character.x][character.y-1] === enemie.appearance) {

            enemie.health -= character.damage;
        }
    } else if(e.keyCode == 17){
        //TODO: write interact(edit: use) function to interact with something and check what it is and call the right function
        Inventory.invElem.forEach(function(element){
            if(Map.room[character.x+1][character.y] === element.appearance
                    || Map.room[character.x-1][character.y] === element.appearance
                    || Map.room[character.x][character.y+1] === element.appearance
                    || Map.room[character.x][character.y-1] === element.appearance){

                Inventory.addItem(element);
            }
        });
    } else if(e.keyCode == 49){
        keyOnePressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 49){
        keyOnePressed = false;
    }
}

///the info panel:
document.addEventListener("click", clickListener, false);

function clickListener(e){
    var p = getMousePos(e);

    Inventory.elements.forEach(function(element){
        if (p.x >= element.x && p.x <= element.x + element.w &&
                p.y >= element.y && p.y <= element.y + element.h) {
            Inventory.showInfos(element.name);
        }
    })
}

//use a item
function use(item){
    document.addEventListener("keydown", ifPressed, false);

    function ifPressed(e) {
        if (e.keyCode == 97 || e.keyCode == 49) {
            if (item.numOfItem >= 1) {
                item.Efect();
                item.numOfItem -= 1;
            }
        }
    }
}

//some functions
function randomInt(min, max){
    return (Math.random() * (max - min)) + min;
}

function getMousePos(e){
    var r = canvasIS.getBoundingClientRect();
    return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
    };
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function drawLegend(){
    ctxLegend.font = "20px Arial";
    ctxLegend.fillStyle = "#000";
    ctxLegend.fillText("Contols: ", 5, 20);

    ctxLegend.font = "16px Arial";
    ctxLegend.fillText("ArrowKeys to move", 5, 36);
    ctxLegend.fillText("NUMpad 0 to hit", 5, 52);
    ctxLegend.fillText("ctrl to Interact", 5, 68);

    ctxLegend.font = "20px Arial";
    ctxLegend.fillStyle = "#000";
    ctxLegend.fillText("Legend: ", 5, 150);

    ctxLegend.font = "16px Arial";
    ctxLegend.fillStyle = character.color;
    ctxLegend.fillText(character.appearance, 5, 166);
    ctxLegend.fillStyle = "#000000";
    ctxLegend.fillText(" - You" , 25, 166);
    ctxLegend.fillText("#", 5, 182);
    ctxLegend.fillText(" - Walls", 25, 182);
    ctxLegend.fillText(".", 5, 198);
    ctxLegend.fillText(" - empty room", 25, 198);
    ctxLegend.fillText(" ", 5, 214);
    ctxLegend.fillText(" - nothing", 25, 214);
    ctxLegend.fillStyle = enemie.color;
    ctxLegend.fillText(enemie.appearance, 5, 230);
    ctxLegend.fillStyle = "#000000";
    ctxLegend.fillText(" - enemies", 25, 230);
    ctxLegend.fillStyle = healPotion.color;
    ctxLegend.fillText(healPotion.appearance, 5, 246);
    ctxLegend.fillStyle = "#000000";
    ctxLegend.fillText(" - Heal Potion", 25, 246);
}

//call the main draw() function
    draw();*/
