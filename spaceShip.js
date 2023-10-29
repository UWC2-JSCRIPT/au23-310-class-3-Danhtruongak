// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip{
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed} light years`);
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const UFO = new SpaceShip('UFO', 20000);
console.log(UFO);
UFO.accelerate();

const HomeMadeShip = new SpaceShip('My_Home_Made_Ship', 1000000);
console.log(HomeMadeShip);
HomeMadeShip.accelerate();