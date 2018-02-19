const Task = function(description, difficulty_level, urgency_level, reward){
  this.description = description
  this.difficulty_level = difficulty_level
  this.urgency_level = urgency_level
  this.reward = reward
  this.complete = false
}

Task.prototype.completed = function(){
  this.complete = true
}


module.exports = Task
