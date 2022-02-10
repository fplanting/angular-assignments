import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {


  animals: Animal[] = [
    {type: 'katt', name: 'Tiger', age: 5, fed: true}, 
    {type: 'hund', name: 'Oliwer', age: 3, fed: false},
    {type: 'Kanin', name: 'Molly', age: 10, fed: true}, 
    {type: 'Marsvin', name: 'Kita', age: 2, fed: false}];


  constructor() { }

  ngOnInit(): void {
  }

}
