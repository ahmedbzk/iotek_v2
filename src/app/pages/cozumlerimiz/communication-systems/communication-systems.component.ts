import { Component } from '@angular/core';
import { SolutionDetailComponent } from '../../../components/shared/solution-detail/solution-detail.component';

@Component({
  selector: 'app-communication-systems',
  standalone: true,
  imports: [SolutionDetailComponent],
  templateUrl: './communication-systems.component.html',
  styleUrl: './communication-systems.component.scss'
})
export class CommunicationSystemsComponent {}
