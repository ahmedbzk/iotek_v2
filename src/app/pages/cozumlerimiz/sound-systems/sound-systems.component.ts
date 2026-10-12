import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-sound-systems',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './sound-systems.component.html',
  styleUrl: './sound-systems.component.scss'
})
export class SoundSystemsComponent {}
