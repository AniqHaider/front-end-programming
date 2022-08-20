class Animal {
  constructor(name, height , weight){
    console.log("Created animal named", name)
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  nameLength(){
    return this.name.length;
  }
}

var dog = new Animal("Milo", 30, 95);
var fish = new Animal("Oldie", 10 , 25);

 console.log(dog.nameLength());
