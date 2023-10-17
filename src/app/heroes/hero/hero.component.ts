import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string ='spidrman';
public age:number=45;

get Capilizename():string{
  return this.name.toUpperCase();
}

getHeroDescription():string {
return `${this.name} ------  ${this.age}`;
}

ChangeHero():void {
this.name='batman';
}

ChangeAge():void{
this.age=90;
}

reset():void{
  this.name='iroman';
  this.age=45;
}
}






