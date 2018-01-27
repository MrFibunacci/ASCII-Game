/**
 * Created by prakikant on 11.01.16.
 */
var Inventory = {
    //properties
    fontsize: 20,
    invElem: [healPotion, firstSword],
    elements: [],

    //methods
    drawInv: function(){

        ctxIS.font = this.fontsize +"px monospace";
        ctxIS.fillStyle = "#000000";
        ctxIS.fillText("Inventar:", canvasIS.width/2-40, this.fontsize);

        //Inventory:
        this.drawInvElements();
    },

    drawInvElements: function(){
        var i = 1;
        var bla = this.elements;
        var fontsize = this.fontsize;
        this.invElem.forEach(function(element){
            if(element.numOfItem >= 1) {
                //console.log(element, canvasIS.width / 2 - 35);
                if(element.used == true){
                    ctxIS.fillStyle = "#899184";
                    ctxIS.fillText(element.name + ": " + element.numOfItem, canvasIS.width / 2 - 35, fontsize * i + 20);
                    ctxIS.fillStyle = "#000000";
                } else {
                    ctxIS.fillText(element.name + ": " + element.numOfItem, canvasIS.width / 2 - 35, fontsize * i + 20);
                }

                bla[i] = {
                    name: element.name,
                    w: (element.name.length + 3) * 20,
                    h: 20,
                    x: canvasIS.width / 2 - 35,
                    y: fontsize * i
                };

                i += 1;
            }
        });

        this.elements = bla;
    },

    showInfos: function(name){
        this.invElem.forEach(function(element){
            if(name === element.name){
                ctxInfo.clearRect(0, 0, canvasInfo.width, canvasInfo.height);
                ctxInfo.font = "20px Arial";
                ctxInfo.fillStyle = "#000000";
                ctxInfo.fillText("Info:", 5, 25);
                ctxInfo.font = "16px Arial";

                ctxInfo.fillText("Name: " + element.name, 10, 45);
                ctxInfo.fillText("Description: ", 10, 65);
                ctxInfo.fillText(element.description, 10, 85);
                ctxInfo.fillStyle = "#00E1FF";

                switch (element.using) {
                    case "equipItem":
                        ctxInfo.fillText("Press '1' and click to equip", 10, 105);

                        if(keyOnePressed == true) {
                            Inventory.equipItem(element);
                        }
                        break;
                    case "pickupItem":
                        break;
                    case "use":
                        ctxInfo.fillText("Press '1' to use", 10, 105);

                        use(element);
                        break;
                }
            }
        });
    },

    addItem: function(item){
        item.numOfItem += 1;
    },

    pickupItem: function(item){
        this.addItem(item);

    },

    equipItem: function(item){
        //TODO: write function ro equip a item
        item.Efect();
        item.used = true;
    }
};
