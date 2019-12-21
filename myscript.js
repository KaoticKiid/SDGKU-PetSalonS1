const salon={
    name:"The Fashion Pets ",
    phone: "xxx-xxx-xxxx",
    address:{
        street:"Elm Avenue Blvd",
        number:"123-G"
    },
    workingHours:{
        days: 'Mon-Fri',
        open: '9:00AM',
        close: '8:00PM'
    },
    pets:[],
    count:function(){
        alert('you have registered ' + salon.pets.length);
    }
}



let {name, phone, address:{street, number}, workingHours:{days, open, close}}=salon;


//document.getElementById("col1").innerHTML = `<h2>${name}</h2><p>Phone: ${phone} </P>`;
//document.getElementById("col2").innerHTML = `<p>Address Information: ${number} ${street} </p>`;
//document.getElementById("col3").innerHTML = `<p>It is open ${days} from ${open} to ${close}.</p>`;

document.querySelector('.info').innerHTML=`<h1> Welcome to ${name} </h1> <br> <p> Contact us @ ${phone}, ${street} ${number} <br> We are ${open} to ${close} on ${days}! </p>`;
document.querySelector('footer .info').innerHTML=`<p> Contact us @ ${phone}, ${street} ${number} <br> We are ${open} to ${close} on ${days}! </p>`;

let petc = 0;
class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {

        this.hunger=10;
        this.happiness=5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone; 
        this.id="pet"+petc;
        petc+=1;
        

        console.log(this.id);
        
    }

    status=function(){
        console.log("happiness:" + this.happiness + "hunger:" + this.hunger);
    
    }

    feed=function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log('feeding....');
    }

    ownerContact=function(){
        console.log(this.ownerName, this.contactPhone);
    }

    numberPets=function(){
        console.log(pets);
    }
   
}

//const pet1 = new Pet("Skip",1,"Dalmation","Male","Wash","Carter","1234567");
//const pet2 = new Pet("Scooby",1,"Retriever","Male","Nail Cut","Agent Smith","9876543");
//const pet3 = new Pet("Bojack",2,"German Sheppard","Male","Nail","Neo","0198237");
//salon.pets.push(pet1);
//salon.pets.push(pet2);
//salon.pets.push(pet3);
//displayPet(pet1);
//displayPet(pet2);
//displayPet(pet3);



var txtName = document.getElementById('name');
var txtAge = document.getElementById('age');
var txtType = document.getElementById('type');
var txtGender = document.getElementById('gender');
var txtBreed = document.getElementById('breed');
var txtService = document.getElementById('service');
var txtOwner = document.getElementById('ownerName');
var txtContact = document.getElementById('contactPhone');


function register(){
    const thePet = new Pet(txtName.value, txtAge.value, txtType.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtContact.value);
    salon.pets.push(thePet);
    clean();
    displayTable(thePet);
}


function clean(){
    txtName.value='';
    txtAge.value='';
    txtGender.value='';
    txtType.value='';
    txtBreed.value='';
    txtService.value='';
    txtOwner.value='';
    txtContact.value='';
}


function displayTable(aPet){
    var tBody = document.getElementById('listBody');
    var row = `<tr id="${aPet.id}"><td>${aPet.name}</td><td>${aPet.age}</td><td>${aPet.gender}</td><td>${aPet.type}</td><td>${aPet.breed}</td><td>${aPet.service}</td><td>${aPet.ownerName}</td><td>${aPet.contactPhone}</td><td><button onclick="remove('${aPet.id}');">Delete</button></td></tr>`;
    tBody.innerHTML+=row;
}

function remove(petId){
    console.log("you want to delete " + petId);

    var tr = document.getElementById(petId);
    var indexDelete;
    for(var i=0; i<salon.pets.length; i++){
        var selectedPet = salon.pets[i];
        
        if(selectedPet.id == petId){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete);
    tr.remove();
}

function search(){
    var searchString = document.getElementById('search').value;

    console.log(searchString);

    for(var j=0;j<salon.pets.length;j++){
        
        var searchedPet = salon.pets[j];

        if(searchedPet.id == searchString){
            theFoundedPet = j;
            document.getElementById('pet'+theFoundedPet).setAttribute('class', 'table-danger');
        }
        
    }

    

}
