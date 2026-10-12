import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageBannerComponent } from '../../../components/layout/page-banner/page-banner.component';

@Component({
  selector: 'app-markalarimiz',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  templateUrl: './markalarimiz.component.html',
  styleUrl: './markalarimiz.component.scss'
})
export class MarkalarimizComponent {
  brands = [
    {
      name: 'Beeses Audio Technologies',
      desc: 'Profesyonel ses sistemleri ve akustik çözümler sunuyoruz. Endüstriyel alanlar, ticari tesisler ve kamusal mekanlar için yüksek kaliteli ve dayanıklı ses donanımları geliştiriyoruz.',
      features: ['Genel Seslendirme ve Anons', 'Akustik Tasarım Çözümleri', 'Profesyonel Ses Ekipmanları'],
      image: 'assets/BeesesLogo.png',
      logo: 'assets/BeesesLogo.png',
      reverse: false
    },
    {
      name: 'Piltek Elektronik',
      desc: 'Güç elektroniği ve enerji yönetim sistemleri konusunda uzmanız. Kesintisiz güç ihtiyaçlarınızı karşılamak üzere tasarlanan UPS, redresör ve özel batarya çözümlerimizle enerjinizi güvence altına alıyoruz.',
      features: ['Kesintisiz Güç Kaynakları', 'Redresör ve İnvertör Sistemleri', 'Endüstriyel Akü Çözümleri'],
      image: 'assets/PiltekLogo.png',
      logo: 'assets/PiltekLogo.png',
      reverse: true
    },
    {
      name: 'IOCAR Electrical',
      desc: 'Elektrikli araç ve otomasyon çözümlerinde yenilikçi adımlar atıyoruz. Özellikle zorlu saha koşulları ve maden operasyonları için sıfır emisyonlu, yüksek performanslı elektrikli arazi araçları (EV) üretiyoruz.',
      features: ['Elektrikli Arazi Araçları', 'Sıfır Emisyonlu Taşıma', 'Özel Otomasyon Sistemleri'],
      image: 'assets/IocarLogo.png',
      logo: 'assets/IocarLogo.png',
      reverse: false
    }
  ];
}
