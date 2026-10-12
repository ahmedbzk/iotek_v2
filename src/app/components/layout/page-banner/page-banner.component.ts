import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() bgImage: string = '/assets/images/hero-camera.jpg';
}
