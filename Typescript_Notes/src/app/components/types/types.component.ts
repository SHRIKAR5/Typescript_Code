import { Component } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {
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

 constructor(){
  console.log(this.val);
  console.log(this.val2);
  console.log(this.val3);
  console.log(this.val4);
 }

}
