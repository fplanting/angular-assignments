import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  @Input() animal: Animal = new Animal('', '', 0, true);

  constructor() { }

  ngOnInit(): void {
  }

}
