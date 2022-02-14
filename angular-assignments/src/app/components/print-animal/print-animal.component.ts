import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {


  animalList: Animal[] = [
    {type: 'katt', name: 'Tiger', age: 5, birthday: new Date(2016, 8, 12), isfed: true}, 
    {type: 'hund', name: 'Oliwer', age: 3, birthday: new Date(2018, 3, 21), isfed: false},
    {type: 'Kanin', name: 'Molly', age: 10, birthday: new Date(2011, 9, 3), isfed: true}, 
    {type: 'Marsvin', name: 'Kita', age: 2, birthday: new Date(2019, 12, 3), isfed: false}];


  constructor() { }

  ngOnInit(): void {
  }

}
