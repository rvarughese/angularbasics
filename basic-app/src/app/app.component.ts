import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}} </h1>
              <span [hidden]="isUnchanged">changed</span>
              <button [style.color]="isSpecial ? 'red': 'green'">Red</button>
              <h2>My favourite hero is: {{myHero.name}}</h2>
              <p *ngIf="heroes.length > 3">There are many heroes!</p>
              <p> heroes:</p>
              <ul>
                <li *ngFor="let hero of heroes">
                {{hero.name}}
                </li>
              </ul>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String;
  myHero: Hero;
  isUnchanged: Boolean = true;
  isSpecial: Boolean = true;

  heroes: Array<Hero> = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  constructor() {
    new Hero(1, 'asb');
    this.title = 'Tour of Heroes';
    //this.heroes = ['Windstorm','Bombasto','Magenta','Tornado'];
    this.myHero = this.heroes[1];
  }

}
