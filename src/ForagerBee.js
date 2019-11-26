/*var ForagerBee = function() {

	Bee.call(this) ;

  this.age = 10  ;
  this.job = 'find pollen' ;
  this.canFly = true ;
  this.treasureChest = [] ;
  this.color = 'yellow' ;
  
  
};



ForagerBee.prototype.forrage = function(treasure) {
  this.treasureChest.push(treasure);
}


ForagerBee.prototype = Object.create(Grub.prototype);
*/
//ForagerBee.prototype.constructor = ForagerBee ;

var ForagerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = "find pollen";
  this.color = "yellow";
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forrage = function(treasure) {
  this.treasureChest.push(treasure);
}