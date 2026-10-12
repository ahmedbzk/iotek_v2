import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/iotekteknoloji', label: 'Facebook' },
    { icon: 'twitter', url: 'https://twitter.com/iotekteknoloji', label: 'Twitter' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/iotek-teknoloji', label: 'LinkedIn' },
    { icon: 'instagram', url: 'https://www.instagram.com/iotekteknoloji', label: 'Instagram' },
    { icon: 'youtube', url: 'https://www.youtube.com/@iotekteknoloji', label: 'YouTube' },
  ];

  brands = [
    { name: 'Beeses', url: '#' },
    { name: 'Iocar', url: '#' },
    { name: 'Piltek', url: '#' },
  ];

  services = [
    { name: 'Kamera Sistemleri', route: '/hizmetler/kamera-sistemleri' },
    { name: 'Ses Sistemleri', route: '/hizmetler/ses-sistemleri' },
    { name: 'Haberleşme Sistemleri', route: '/hizmetler/haberlesme-sistemleri' },
    { name: 'Maden Ekipmanları', route: '/hizmetler/maden-ekipmanlari' },
    { name: 'Güç Elektroniği', route: '/hizmetler/guc-elektronigi' },
    { name: 'Kontrol Merkezi Çözümleri', route: '/hizmetler/kontrol-merkezi' },
  ];
}
