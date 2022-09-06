import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  input  ="";
  num1  ="";
  op  = "";
  history  = "";
  r  = "";

  /*
  Adds a number/carac to the input element
  */
 add(value:string) {
   this.input != "" ? this.input += value : this.input = value;
   if(this.r != "") {
      this.r = "";
      this.clearHistory();
   }
}

/*
Manages when the user clicks an operation button
*/
 makeMove(passedOp:string) {
   if(this.input != "") {

      if(this.num1 != ""){
        this.num1 = this.getMathValue(this.num1+this.op+this.input);
      }else {
        this.num1 = this.input;
      }

      this.op = passedOp;
      this.input="";
      this.addHistory(this.num1+this.op)
      this.clearCurrentInput();
   }
}

/*
  Resolve
*/
 resolve() {
   if(this.input != "") {
         this.r = this.getMathValue(this.num1+this.op+this.input)
         this.addHistory(this.r);
         this.clearCurrentInput();
         this.num1 = "";
   }
}

/*
Clear the current value of the input element
*/
 clearCurrentInput() {
   this.input = "";
}

/*
Delete the las value of the current input
*/
 deleteValue() {
   if(this.input != "") {
      this.input = this.input.slice(0, -1);
   }
}

/*
Adds a number to the history label
*/
 addHistory(x:string) {
   this.history = x;
}

/*
Clear to the history label
*/
 clearHistory() {
   this.history = "";
  }

/*
Gets the Math value of a operation string
*/
 getMathValue(str:string){
   return new Function('return ' + str)();
 }


}
