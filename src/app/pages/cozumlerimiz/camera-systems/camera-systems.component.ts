import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-camera-systems',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './camera-systems.component.html',
  styleUrl: './camera-systems.component.scss'
})
export class CameraSystemsComponent {}
