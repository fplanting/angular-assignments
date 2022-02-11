import { Component } from '@angular/core';
import { Animal } from './models/Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-assignments';

  zoo: Animal[] = [
    {type: 'katt', name: 'Tiger', age: 5, isfed: true}, 
    {type: 'hund', name: 'Oliwer', age: 3, isfed: false},
    {type: 'Kanin', name: 'Molly', age: 10, isfed: true}, 
    {type: 'Marsvin', name: 'Kita', age: 2, isfed: false}];

  animalsFed: number = 0;

  makeAnimalFed(animal: Animal) {
    animal.isfed = true;
    this.animalsFed++;
  }
}
