// OOP (Object Oriented Programming) di javascript
// Apa itu OOP
// Object Oriented Programming adalah paradigma pemrograman yang bertumpu pada konsep kelas dan objek.

//
// Object Oriented Programming is a programming paradigm that is based on the concepts of class and object.


class Car {

        constructor(nameCar, colorCar){
            this.name = nameCar;
            this.color = colorCar;
        }
    
        // name = "Avanza"
        // color = "black"

        run(){
            return"Goes brrrr " + this.name;
        }   

}   

const avanza = new Car("avanza","putih");
const bmw = new Car("bmw","hitam");

console.log(avanza.color) ;
console.log(bmw.name) ;

console.log(avanza.run());
console.log(bmw.run());

// WITHOUT CLASS 

// const Cat = {
//     name :"North",
//     tail : "Black"
// }

// const cat = Object.assign({},Cat);
// const cat2 = Object.assign({},Cat);
// cat2.tail = "Red";

// console.log(cat);
// console.log(cat2);