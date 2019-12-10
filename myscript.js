// object literal
const salon = {
    name: "The Fashion Pets",
    phone: "xxx-xxx-xxxx",
    address: {
        street: "Avenue Blvd",
        number: "123-g"
    },
    workingHours: {
        days: "Mon-Fri",
        open: "9:00am",
        closing: "8:00pm"
    },
    pets: []
};

//object deconstructing

let { name,pets, phone, address: { street, number }, workingHours: { days, open, closing } } = salon;

document.getElementById("col1").innerHTML = `<h2>${name}</h2><p>Phone: ${phone} </P>`;

document.getElementById("col2").innerHTML = `<p>Address Information: ${number} ${street} </p>`;

document.getElementById("col3").innerHTML = `<p>It is open ${days} from ${open} to ${close}.</p>`;

class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact) {
    this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.phoneContact = phoneContact;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function(){
        console.log("Owner name:"+this.ownerName + " \n" + "Contact Number: " + this.phoneContact);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding....")
    }
    status = function(){
        console.log("Hunger: "+this.hunger +"\n" + this.happiness);
    }
  
}

const pet1 = new Pet("Skip",1,"Dalmation","Male","Wash","Carter","1234567");
const pet2 = new Pet("Scooby",1,"Retriever","Male","Nail Cut","Agent Smith","9876543");
const pet3 = new Pet("Bojack",2,"German Sheppard","Male","Nail","Neo","0198237");

console.log(pet1);
// console.log(pet1.status());
// console.log(pet1.feed());
// console.log(pet1.status());

console.log(pet2);
// console.log(pet2.ownerInfo());
// console.log(pet2.status());
// console.log(pet2.feed());
// console.log(pet2.status());

console.log(pet3);
// console.log(pet3.ownerInfo());
// console.log(pet3.status());
// console.log(pet3.feed());
// console.log(pet3.status());

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
console.log(salon.pets);

//display in alert message the number of pets

// numberOfPets = function(){
//alert("we have " + pets.length + " pets in the store.");     
// }


// numberOfPets();

var text=" ";
for (var i=0;i<salon.pets.length;i++){
    //console.log(salon.pets[i])
text += `Name: ${salon.pets[i].name}, Age: ${salon.pets[i].age}, Owner: ${salon.pets[i].ownerName} <br>`;  

}

document.getElementById("pets").innerHTML=text;
  