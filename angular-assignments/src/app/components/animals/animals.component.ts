import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  @Input() animal: Animal = new Animal('Orm', 'Snape', 0, true);
  @Output() fed = new EventEmitter<Animal>();

  
  feedAnimal() {
    this.fed.emit(this.animal);
  }

  animationSpeed: number = 2;
  
  constructor() { }

  ngOnInit(): void {
  }

}
