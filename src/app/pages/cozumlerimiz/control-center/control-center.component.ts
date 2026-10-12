import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-control-center',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './control-center.component.html',
  styleUrl: './control-center.component.scss'
})
export class ControlCenterComponent {}
