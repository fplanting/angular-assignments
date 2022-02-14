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
    {type: 'katt', name: 'Tiger', age: 5, birthday: new Date(2016, 8, 12), isfed: true}, 
    {type: 'hund', name: 'Oliwer', age: 3, birthday: new Date(2018, 3, 21), isfed: false},
    {type: 'Kanin', name: 'Molly', age: 10, birthday: new Date(2011, 9, 3), isfed: true}, 
    {type: 'Marsvin', name: 'Kita', age: 2, birthday: new Date(2019, 12, 3), isfed: false}];

  animalsFed: number = 0;

  makeAnimalFed(animal: Animal) {
    animal.isfed = true;
    this.animalsFed++;
  }

  animalPic: string = 'imageAnimals';

  imageAnimals: string = 'https://freedesignfile.com/upload/2012/07/Animals-with-billboard-vector-1.jpg';
}
