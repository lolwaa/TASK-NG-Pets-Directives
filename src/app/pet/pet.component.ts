import { Component, Input } from '@angular/core';

import { Pet } from '../../data/pets';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input() pet!: Pet;
}
