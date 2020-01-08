// in this exercise we will be creating two classes
// we will also create instances of those classes

// declare a new class
class Zoo {
  constructor(animals = []) {
    this.animals = animals; // array
  }

  // give the zoo a method
  tourZoo() {
    // loop through the animals array supplied to this class
    for (let i = 0; i < this.animals.length; i++) {
      console.log(this.animals[i].species);
    }
  }
}

// declare a new class
class Animal {
  constructor(species, isAquatic) {
    this.species = species; // string
    this.isAquatic = isAquatic; // bool
  }

  // give the animal a method
  // have it take in a parameter named food
  eatFood(food) {
    console.log(`${this.species} eats some ${food}.`);
  }

  // give the animal another method
  move() {
    // check to see if the animal is aquatic
    // if it is, it swims
    if (this.isAquatic === true) {
      console.log(`The ${this.species} swims.`);
    }

    // if it doesn't, it walks
    else {
      console.log(`The ${this.species} walks.`);
    }
  }
}

// create a new instance of the Animal class and give it supply it with args
const Wolf = new Animal('Wolf', false);

// have the Wolf move
// comment this method call out once you know it works
Wolf.move();

// declare another instance of the Animal class and supply it with different args
const Shark = new Animal('Great White Shark', true);

// have the shark move
// comment this method call out once you know it works
Shark.move();

// have the shark eat, and pass in a string
// comment this method call out once you know it works
Shark.eatFood('small fish');

// create a new instance of the Zoo class and supply it with an array as an arg
// you could also create a new variable that is the array and set its contents to what we're passing in
const PointDefiance = new Zoo([Wolf, Shark]);

// call the tourZoo method on our zoo class
// this will list all animals in the current instance of the zoo class
PointDefiance.tourZoo();
