//complete this code
class Animal {
	constructor(species){
	this.species=species;
	}
makeSound{
	console.log(`The ${this.species} makes a sound`);
}
}

class Dog extends Animal {
	bark(){
		consloe.log("woof");
	}
}

class Cat extends Animal {
	bark(){
     consloe.log("purr");
	
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
