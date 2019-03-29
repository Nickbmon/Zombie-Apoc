var inp;
var canfod = {
    amount: 1000,
    bought: 2018,
    canFood: ["Beans", "Corn", "Spam", "pineapple"],
    spoilEarly: false,
    calcAmount: function(inp) {
        return this.f = 100 + inp; 
    }
};
console.log(canfod.calcAmount(inp));
console.log(canfod);

var Medkit = {
    color: "Red",
    boughtFrom: "Bj's",
    bought: 2018,
    items: ["Alcohol", "Bandages", "Neosporin", "Painkillers"],
    calcUses: function(inp) {
        return this.uses = 5000 - inp ;
    }
};
console.log(Medkit.calcUses(inp)); 
console.log(Medkit);

var Weapons = {
    colors: "Black",
    boughtFrom: "Gun store",
    bought: 2014,
    weapons: ["Katana", "Crossbow", "Glock 19", "Grenade"],
    calcBullet: function(inp) {
        return this.Amount = 10000 - inp;
    }
};
console.log(Weapons.calcBullet(inp));
console.log(Weapons);

var drop;
var dropVal;

document.getElementById('btn').addEventListener('click',function(){
    inp = document.querySelector('.iptOne').value;
    drop = document.querySelector(".stuff");
    dropVal = drop.options[drop.selectedIndex].value;
    
    console.log(dropVal);
    
    switch(dropVal) {
        case 'cannedFoods': 
            document.querySelector(".target").innerHTML = "You now have" + " " + canfod.calcAmount(parseInt(inp)) + " " + "canned item's"  ;
        break;
        case 'medkit': 
            document.querySelector(".target").innerHTML = "Your medkit has" + " " + Medkit.calcUses(inp) + " " + "usages left";
        break;
        case 'weapons': 
            document.querySelector(".target").innerHTML = "Your weapons are" + " " + Weapons.calcBullet(inp) + " " + "years old" ;
        break;
        }
});
    
    
    
    
    
    
    
    
    
    
    

