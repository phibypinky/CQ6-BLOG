let firstName =""
let  lastName = "Phiby";
firstName = "Pinky";
let city ="Kampala"
let district="Wakiso"

//methods of ptting strings
//method one
let fullName = "" .concat(firstName," ", lastName );
console.log (fullName)

//method two
fullName=firstName + lastName;
console.log (fullName)

//method three
fullName=`${firstName} ${lastName} ${city}`
console.log(fullName)

//spaceis considered as a value in js
//so firstName="  Phiby" is not the same asfirstName="Phiby"
//comparingthe 2 will yield false
firstName="Phiby";
name="Phiby";
console.log (firstName==name)

//using trimStart,for removing space at the start of a string
//this will yield true because space wii have been removed
firstName="Phiby";
name="Phiby"
console.log(firstName.trimStart()===name)


//object
//let person={}
//let person=new Object()

let CodeQueenAddress={
    town:"Ntinda",
    city:"Kampala",
    seatingCapacity:"1000",
    building:"Ntinda Complex",
    office:"Innovation Village",
    8888:'Phiby Personal'
}

//get info out of object
console.log(CodeQueenAddress.office) //dot notation,this is used when dealing with string property
console.log(CodeQueenAddress['building'])//subject method
console.log(CodeQueenAddress[8888])//square brackets used for numbers

codeQueenAddress[8888] // for numbers
// assigning more properties
codeQueenAddress.isAvailable = true;

console.log('town >>>> ' ,town)
codeQueenAddress.town = "Kamwokya"; // changes the value of town
codeQueenAddress.office = "The Hive Collab";
codeQueenAddress.hasElevator = true;

console.log('town >>>> ' ,town)

console.log(codeQueenAddress)

let newOffice = Object.assign({}, codeQueenAddress)  // makes a detached copy




// newOffice = codeQueenAddress // assign by reference
// let altOffice = {...codeQueenAddress}

// altOffice = {...altOffice, office: 'Nakawa', town: 'Nakawa'}

const person={
    name:"Mercy"
    
}