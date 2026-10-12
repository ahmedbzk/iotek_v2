import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-power-electronics',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './power-electronics.component.html',
  styleUrl: './power-electronics.component.scss'
})
export class PowerElectronicsComponent {}
