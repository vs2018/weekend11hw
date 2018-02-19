const Hero = function(name, food){
  this.name = name
  this.food = food
  this.health = 100
  this.tasks = []
}

Hero.prototype.talk = function(){
  "I can talk with my " + this.name
}

Hero.prototype.eat = function(food){
  if(this.food === food.name){
    this.health += (food.replenishment_value * 1.5)
  } else {
    this.health += food.replenishment_value
  }
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task)
}

Hero.prototype.tasksCompleted = function(){
  return result = this.tasks.filter(task => task.complete === true)
}

Hero.prototype.sort = function(type){
  if(type === "difficulty"){
    this.tasks.sort(function (task1, task2) {
      return task1.difficulty_level - task2.difficulty_level
    })
  }

  if(type === "urgency"){
    this.tasks.sort(function (task1, task2) {
      return task1.urgency_level - task2.urgency_level
    })
  }

  if(type === "reward"){
    this.tasks.sort(function (task1, task2) {
      return task1.reward - task2.reward
    })
  }


}


module.exports = Hero
