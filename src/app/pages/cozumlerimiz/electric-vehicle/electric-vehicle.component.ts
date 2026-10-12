import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-electric-vehicle',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './electric-vehicle.component.html',
  styleUrl: './electric-vehicle.component.scss'
})
export class ElectricVehicleComponent {}
