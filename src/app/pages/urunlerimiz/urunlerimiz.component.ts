import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PageBannerComponent } from '../../components/layout/page-banner/page-banner.component';

interface Product {
  name: string;
  desc: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-urunlerimiz',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  templateUrl: './urunlerimiz.component.html',
  styleUrl: './urunlerimiz.component.scss'
})
export class UrunlerimizComponent implements OnInit {
  categories: Category[] = [
    {
      id: 'sql-serisi',
      name: 'SQL Serisi',
      products: [
        { name: 'SQL-100 Modülü', desc: 'Endüstriyel sınıf dayanıklı donanım ve iletişim arabirimi', image: 'assets/images/services/camera.jpg' },
        { name: 'SQL-200 Kontrolörü', desc: 'Yüksek kapasiteli yönetim ve izleme modülü', image: 'assets/images/services/camera.jpg' },
        { name: 'SQL-300 Analitik', desc: 'Gelişmiş analitik sunucusu ve AI destekli işleme', image: 'assets/images/services/camera.jpg' }
      ]
    },
    {
      id: 'of-serisi',
      name: 'OF Serisi',
      products: [
        { name: 'OF-A1 Dış Ortam Kutusu', desc: 'IP67 standartlarında dış ortam iletişim panosu', image: 'assets/images/services/comm.jpg' },
        { name: 'OF-A2 Fiber Modül', desc: 'Genişletilmiş fiber optik ağ dağıtım modülü', image: 'assets/images/services/comm.jpg' }
      ]
    },
    {
      id: 'petek-serisi',
      name: 'PETEK Serisi',
      products: [
        { name: 'PETEK-Base Kontrol', desc: 'Modüler merkezi kontrol ve komuta ünitesi', image: 'assets/images/services/control.jpg' },
        { name: 'PETEK-Max İstasyon', desc: 'Genişletilebilir ana kontrol ve yönetim istasyonu', image: 'assets/images/services/control.jpg' },
        { name: 'PETEK-Mini Saha', desc: 'Kompakt yapıya sahip yerel saha kontrolörü', image: 'assets/images/services/control.jpg' }
      ]
    },
    {
      id: 'madenci-kafa-lambasi',
      name: 'Madenci Kafa Lambası',
      products: [
        { name: 'MKL-Pro Kablosuz', desc: 'Uzun ömürlü, dayanıklı ve kablosuz madenci lambası', image: 'assets/images/services/mining.jpg' },
        { name: 'MKL-Lite Ergonomik', desc: 'Hafif, ergonomik ve patlamaya karşı korumalı (Ex-Proof) tasarım', image: 'assets/images/services/mining.jpg' }
      ]
    },
    {
      id: 'maden-aydinlatma',
      name: 'Maden Aydınlatma',
      products: [
        { name: 'EX-Proof Yeraltı LED', desc: 'Yeraltı maden ocakları için güvenli aydınlatma armatürü', image: 'assets/images/services/power.jpg' },
        { name: 'Tünel Projektörü', desc: 'Geniş açılı, darbeye ve toza yüksek oranda dayanıklı projektör', image: 'assets/images/services/power.jpg' }
      ]
    }
  ];

  activeCategoryId: string = 'sql-serisi';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (frag && this.categories.some(c => c.id === frag)) {
        this.activeCategoryId = frag;
        setTimeout(() => {
          const el = document.getElementById('products-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }

  setActive(id: string) {
    this.activeCategoryId = id;
  }
}
