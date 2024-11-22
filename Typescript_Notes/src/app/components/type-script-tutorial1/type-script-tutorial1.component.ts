import { Component } from '@angular/core';

@Component({
  selector: 'app-type-script-tutorial1',
  templateUrl: './type-script-tutorial1.component.html',
  styleUrl: './type-script-tutorial1.component.css'
})
export class TypeScriptTutorial1Component {
  // -----------------------------------Type Assignment----------------------------------
  // 3 main types: boolean, number, string
  // 2 less common types: bigInt, symbol

  /* 
  Type Assignmnt:
  Explicit : 
  mentioning / writing out the type
  */
  val : number = 0;

  /*
  Implicit : 
  Implicit - TypeScript will "guess" the type, based on the assigned value
  */
  val2 = "hi!";


  /*
  Special Type:
  1.any
  2.unknown
  */
  val3 : any = true;

  val4 : unknown = null;



  // -----------------------------------Arrays----------------------------------
  names : string[] = [];
  nums = [1,2,3,4]; // ts Implicitly defines the array type

  read_name : readonly string[] = ["Omkar"];

  head_read_name: string[] = [this.read_name[0]];



  // -----------------------------------Tuples----------------------------------
  // myTuple ?: string[];
  // You declared myTuple?: string[];, which means myTuple could be undefined if it’s not initialized. 
  // (you also need to initialize it in constructor like these : 1] this.myTuple = ["Hi!"];  or 2] this.myTuple = this.myTuple || []; ) 
  // In the constructor, when you call this.myTuple.push("Yo!");, if myTuple is still undefined, 
  // it will throw an error because you can't perform operations like push() on undefined.
  myTuple : string[] = [];

  // When initializing myTuple1 since we have defined the 1st 3 values datatypes as [string, number, boolean] its 1st 3 values should be [string, number, boolean];
  // !!!!Values appended after these can be anything.
  myTuple1 ?: [string, number, boolean];  // here we used '?:' means 'if present' and as some typescript linters are more strict and cant be left with uninitialized tuples
  // myTuple2 !: [string, number, boolean]; // here we used '!:' means 'will be defined later' similar to '?:'
  myTuple3 : [string, number, boolean] = ['Hi!', 0, true];

  readMyTuple : readonly string[] = ['Mango', 'Orange', 'Grapes'];
  readMyTuple2 : readonly [string, number, boolean] = ['Mango', 5, true];



  // ---------Destructuring Tuples-----------
  tuplex ?: number;
  tupley ?: number;

  destructTuple : number[] = [5, 10];

  // destructTuple : [this.tuplex, this.tupley] = [5, 10];



  // -----------------------------------Object Types----------------------------------
  car : {type: string, model: string, year: number} = {type: "Toyota", model: "Corolla", year: 2010};
  car2 = {type: "bmw"}



  // -----------------------------------Functions----------------------------------
  // mentions the return type of the function
  currentDate() : string {
    let date = new Date()
    return date.toISOString();
  }

  num_sum(a: number, b: number | null = 10, c?:number): number {
    return a + (b??10) + (c || 0);
  }






  



  constructor(){
    console.log(this.val);
    console.log(this.val2);
    console.log(this.val3);
    console.log(this.val4);



    this.names.push('Shrikar');
    //  this.names.push(5); // gives error since not a string as defined in array
    console.log(this.names);

    this.nums.push(5);
    //  this.nums.push('Shrikar'); // gives error since not a number as defined in array
    console.log(this.nums);

    //  this.read_name.push("Shrikar");
    console.log(this.read_name);

    this.head_read_name.push("Shrikar");
    console.log(this.head_read_name);


  
    console.log(this.myTuple);
    // this.myTuple?.push(0);
    this.myTuple.push("Yo!");
    console.log(this.myTuple);

    // Here we initialized myTuple1 else it will be undefined and throws an error
    this.myTuple1 = ["Yo1!", 1, true];
    console.log(this.myTuple1);
    this.myTuple1?.push(2);
    this.myTuple1.push("Yo2!");
    console.log(this.myTuple1);

    // this.myTuple3 = ["Yo2!", 2, true];
    console.log(this.myTuple3);
    this.myTuple3?.push(3);
    this.myTuple3.push("Yo2!");
    console.log(this.myTuple3);

    console.log(this.readMyTuple);
    // this.readMyTuple.push('Pear'); // Cannot add values since its readonly
    console.log(this.readMyTuple2);

    const [x, y] = this.destructTuple;
    console.log("x, y : ", x, y); // Output: 5, 10

    [this.tuplex, this.tupley] = this.destructTuple;
    console.log("this.tuplex, this.tupley : ", this.tuplex, this.tupley);



    console.log("Car", this.car);
    this.car.year = 2009;
    console.log("Car", this.car);
    // this.car.year = "HI";  // Throws error for invalid data type
    (this.car as any).seats = 4;  // this is just for compatibility 
    // apart from angular in pure ts its car.seats = 4;
    console.log("Car", this.car);

    console.log("Car2", this.car2);
    this.car2.type = "mercedes";
    console.log("Car2", this.car2);
    // this.car2.type = 5;  //Invalid syntax



    // -----------------------------------Enum----------------------------------
    enum directions {
      North,
      East,
      West,
      South,
    }

    console.log("enum directions", directions);
    console.log(directions[0], directions.North);   //directions.0 gives error

    enum directions2 {
      North = 5,
      East,
      West,
      South,
    }

    console.log("enum directions2", directions2);



    // -----------------------------------Interfaces and Aliases & Interfaces with class----------------------------------
    let test_var = new Area();
    console.log("test_var.add(10,20) : ", test_var.add(10,20));
    console.log("test_var.height : ", test_var.height);
    console.log("test_var.width : ", test_var.width);
    console.log("test_var.length : ", test_var.length);

    // let rect : Rectangle ={
    //   height : 10,
    //   width : 10,
    //   add(a, b){
    //     return a + b
    //   }
    // };
    console.log("rect.add(10, 20) : ", rect.add(10, 20));
    console.log("Aliases > Car", Car);


    // -----------------------------------Functions----------------------------------
    console.log("Current Date : ", this.currentDate());
    console.log("num_sum1 : ", this.num_sum(1, 20, 2));
    console.log("num_sum undefined : ", this.num_sum(1, undefined, 2));
    console.log("num_sum null : ", this.num_sum(1, null, 2));


    // -----------------------------------Class----------------------------------
    let emp = new SalesEmployee("John Smith", 123, "Sales");
    emp.abc(); // This will now work correctly
    emp.empName = "Aniket";
    console.log(emp.empName);
    // console.log(emp.department);  // This will now work as this.department is private

  }

}







// -----------------------------------Interfaces and Aliases----------------------------------
// -----------------------------------Interfaces----------------------------------
// Interface should always e defined outside the class
interface Rectangle {
  height: number,
  width: number,
  add (a: number, b: number): number;
};

interface Rectangle2 extends Rectangle {
length: number;
};

class Area implements Rectangle2 {
  height = 5;
  width = 10;
  length = 15;
  add(a: number, b: number): number{
    return a + b;
  }
}

let rect : Rectangle = {
  height : 10,
  width : 10,
  add(a, b){
    return a + b;
  }
};

// -----------------------------------Aliases----------------------------------
// Type Aliases allow defining types with a custom name (an Alias).
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
}

const carYear: CarYear = 2024;
const carType: CarType = "Suv";
const carModel: CarModel = "TataCurv";

let Car = {
  year: carYear,
  type: carType,
  model: carModel
}

// console.log("Car", Car);



// -----------------------------------class----------------------------------
// One E.g. of class is als mentioned in interfaces and Aliases above

// Public: can be accessed from anywhere: within the class, by derived classes, and outside the class (directly using an object).
// Protected: can be accessed within the class and by classes that extend (inherit from) it. However not accessible directly outside the class.
// Private: are accessible only within the class where they are defined. They are not accessible by derived classes or outside the class.

class Employee {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
      this.empName = name;
      this.empCode = code;
  }
  
  public add(){
    console.log("add");
  }
}

class SalesEmployee extends Employee {
  private department: string;
  
  constructor(name: string, code: number, department: string) {
      super(name, code);
      this.department = department;
  }
 
  abc() { 
      console.log(this.empCode); // Use 'this' to access the protected property
      super.add();
  }
}

// let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.abc(); // This will now work correctly
// emp.empName = "Aniket";
// console.log(emp.empName);
// console.log(emp.department); 
