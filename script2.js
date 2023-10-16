
console.log("Write a “person” class to hold all the details");
//Displating the details of aperson by sing the class and printing the details
class person{
    constructor(name,age,dob,location,role,number
        ){
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.location=location;
        this.role=role;
        this.number=number;
        
    }
    details()
    {
        return "My name is " +this.name +"  "+"Age is "+" "+this.age+"  "+"DOB"+this.dob+" "+
        "Location Where i am living "+ " "+this.location+" "+
        "Working as a" +" "+this.role+"  "+  "Contact number"+
        this.number;
        
    }
}

var persondetails= new person("Pavithra","24","1996","Chennai","Web Developer","1234567890");
console.log(persondetails.details());
