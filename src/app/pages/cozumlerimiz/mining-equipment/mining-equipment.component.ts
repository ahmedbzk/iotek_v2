import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-mining-equipment',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './mining-equipment.component.html',
  styleUrl: './mining-equipment.component.scss'
})
export class MiningEquipmentComponent {}
