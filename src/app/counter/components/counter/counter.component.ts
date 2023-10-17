import { Component } from "@angular/core";


@Component({

  selector:'app-counter',
  template:`

<h3>counter:{{counter}}</h3>

<button (click)="incresBy(+1)" >+1</button>
<button (click)="resetBy()" >reset</button>
<button (click)="incresBy(-1)"  >-1</button>
  `



})
export class CounterComponet{
  public  title: string  = 'mi primera app de angular';
  public counter:number=10;

  public incresBy(value:number):void{

   this.counter+=value;
  }
  public resetBy():void{
 this.counter= 10;
  }
}
