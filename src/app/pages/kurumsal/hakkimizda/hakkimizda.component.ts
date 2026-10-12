import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageBannerComponent } from '../../../components/layout/page-banner/page-banner.component';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  templateUrl: './hakkimizda.component.html',
  styleUrl: './hakkimizda.component.scss'
})
export class HakkimizdaComponent {
  values = [
    { title: 'Yenilikçilik', desc: 'Sürekli gelişen teknolojiyi takip ederek öncü çözümler sunarız.', icon: 'rocket' },
    { title: 'Güvenilirlik', desc: 'Söz verdiğimiz zamanda, beklentileri aşan kalitede iş teslim ederiz.', icon: 'shield' },
    { title: 'Sürdürülebilirlik', desc: 'Hem iş modellerimizde hem de çevresel etkimizde sürdürülebilirliği ön planda tutarız.', icon: 'leaf' },
    { title: 'Müşteri Odaklılık', desc: 'Müşterilerimizin başarısını kendi başarımız olarak görürüz.', icon: 'heart' }
  ];
}
