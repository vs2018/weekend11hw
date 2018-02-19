const Rat = function(){

}

Rat.prototype.touch = function(food){
  food.replenishment_value = -10
}


module.exports = Rat
