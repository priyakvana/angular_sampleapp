
import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent { 
   private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;
   constructor(){
     this.jbtHeading="hello world";
     this.jbtText="hello world34";
     this.jbtBtnText="read more";
    this.jbtBtnUrl="/about";

     


   }



}
