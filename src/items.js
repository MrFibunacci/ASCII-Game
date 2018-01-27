/**
 * Created by prakikant on 13.01.16.
 */
var healPotion = {
    appearance: "&",
    color:      "#6ED42F",
    name:       "Healing Potion",
    numOfItem:  3,
    using:      "use",
    Efect: function(){
        character.health = 100;
    },
    description: "set Health back to 100 Points"
};

var firstSword = {
    x: character.x+1,
    y: character.y+1,
    appearance: "†",
    color:      "#878C87",
    name:       "First Sword",
    numOfItem:  0,
    using:      "equipItem",
    used:       false,
    Efect: function(){
        character.damage = 10;
        character.activeWeapon = this.name;
    },
    initfSword: function(){
        //TODO: set it close to palyer

        if(this.numOfItem < 1) {
            Map.room[firstSword.x][firstSword.y] = firstSword.appearance;
        }
    },
    description: "10 Damage"
};

//TODO: key =  ¬ ?

//TODO: add some more items