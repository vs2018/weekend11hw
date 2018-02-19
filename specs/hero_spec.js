const assert = require("assert")
const Hero = require("../hero")
const Task = require("../task")
const Food = require("../food")
const Rat = require("../rat")


describe("Hero tests", function(){


  let hero
  let food
  let task
  let task2
  let task3
  let fav_food
  let rat

  beforeEach("Setup", function(){
    hero = new Hero("Vishal", "Pizza")
    task = new Task("Save the world", 50, 10, 60)
    task2 = new Task("Save the planet", 30, 80, 40)
    task3 = new Task("Save the country", 70, 40, 30)
    food = new Food("Macaroni", 20)
    fav_food = new Food("Pizza", 30)
    rat = new Rat()

  })

  it("A hero should be able to eat food, and health should go up by the replenishment value", function(){
    hero.eat(food)
    assert.strictEqual(hero.health, 120)
  })

  it("If the food is their favourite food, their health should go up by 1.5 * value", function(){
    hero.eat(fav_food)
    assert.strictEqual(hero.health, 145)
  })

  it("A hero should be able to sort their tasks by difficulty, urgency or reward.", function(){
    hero.addTask(task)
    hero.addTask(task2)
    hero.addTask(task3)
    hero.sort("difficulty")
    assert.deepStrictEqual(hero.tasks, [task2, task, task3])
    hero.sort("reward")
    assert.deepStrictEqual(hero.tasks, [task3, task2, task])
  })

  it("A hero should be able to sort their tasks by difficulty, urgency or reward.", function(){
    hero.addTask(task)
    hero.addTask(task2)
    hero.addTask(task3)
    hero.sort("urgency")
    assert.deepStrictEqual(hero.tasks, [task, task3, task2])
  })


  it("A hero should be able to view tasks that are marked as completed or incomplete.", function(){
    task.completed()
    task2.completed()
    hero.addTask(task)
    hero.addTask(task2)
    assert.deepStrictEqual(hero.tasksCompleted(), [task, task2])
  })

  it("Heroes that eat poisonous food should lose health.", function(){
    rat.touch(food)
    hero.eat(food)
    assert.deepStrictEqual(hero.health, 90)
  })






})
