import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PageBannerComponent } from '../../components/layout/page-banner/page-banner.component';

@Component({
  selector: 'app-sureclerimiz',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBannerComponent],
  templateUrl: './sureclerimiz.component.html',
  styleUrl: './sureclerimiz.component.scss'
})
export class SureclerimizComponent implements OnInit {
  hizmetler = [
    {
      id: 'ihtiyac-analizi',
      title: 'İhtiyaç Analizi',
      subtitle: 'Derinlemesine analiz, net yol haritası.',
      desc: 'Mevcut durumunuzu, hedeflerinizi ve saha gerçeklerinizi birlikte değerlendiriyoruz. Paydaş görüşmeleri, keşif çalışmaları ve veri odaklı ölçümlerle kullanım senaryolarını netleştiriyor; riskleri, mevzuat/standart uyumunu ve kapasite planlamasını ortaya koyuyoruz. Sonuçta, önceliklendirilmiş gereksinim listesi, çözüm yaklaşımı ve yol haritasını somutlaştırıyoruz.',
      icon: 'search',
      color: '#00ABCD',
      image: 'assets/images/services/camera.jpg'
    },
    {
      id: 'projelendirme',
      title: 'Projelendirme',
      subtitle: 'İhtiyaca uygun tasarım, net proje. Sağlam mimari, sürdürülebilir çözüm.',
      desc: 'Analiz çıktılarına dayalı, ölçeklenebilir ve sürdürülebilir bir sistem tasarımı oluşturuyoruz. Mimari kurguyu, yerleşim ve altyapı planlarını, güvenlik ve erişim politikalarını, yedeklilik ve izlenebilirlik katmanlarını dokümante ediyor; test ve kabul kriterleri ile proje takvimini netleştiriyoruz. Hedef, sahaya inince kesintisiz uygulanabilir bir proje seti sunmaktır.',
      icon: 'edit',
      color: '#184341',
      image: 'assets/images/services/control.jpg'
    },
    {
      id: 'uygulama-kurulum',
      title: 'Uygulama / Kurulum / Üretim',
      subtitle: 'Doğru kurulum, güvenilir performans.',
      desc: 'Onaylı projeyi sahada hayata geçiriyoruz. Malzeme ve ekipman tedariki, montaj ve kablolama, konfigürasyon ve etiketleme, iş güvenliği prosedürleri ve kalite kontrol adımlarını bütünleşik bir akışla yönetiyoruz. Kurulum sürecinde disiplinler arası koordinasyonu sağlayarak, planlanan performansı ve teslim takvimini güvence altına alıyoruz.',
      icon: 'settings',
      color: '#00ABCD',
      image: 'assets/images/services/comm.jpg'
    },
    {
      id: 'devreye-alma',
      title: 'Devreye Alma',
      subtitle: 'İlk günden kararlı işletim. Güvenle devreye al, kesintisiz çalış.',
      desc: 'Sistemleri test planına göre doğruluyor, kalibrasyon ve performans ayarlarını tamamlıyoruz. Kabul kriterlerini birlikte gözden geçirerek, izleme ve alarm yapılarını devreye alıyoruz. Kullanıcı eğitimleri, operasyon el kitapları ve as-built dokümantasyonla, ilk günden kararlı ve güvenli işletim seviyesine geçiş sağlıyoruz.',
      icon: 'power',
      color: '#184341',
      image: 'assets/images/services/power.jpg'
    },
    {
      id: 'bakim-onarim',
      title: 'Bakım – Onarım',
      subtitle: 'Güvenilir destek, uzun ömürlü sistemler.',
      desc: 'Periyodik bakım, arıza yönetimi ve güncellemelerle sistemlerin sürdürülebilirliğini sağlıyoruz. Uzaktan ve yerinde destek, yedek parça ve envanter yönetimi, performans izleme ve raporlama ile yaşam döngüsü boyunca güvenilir çalışma sunuyoruz. Hedefimiz, duruş sürelerini azaltmak ve toplam sahip olma maliyetini optimize etmektir.',
      icon: 'tool',
      color: '#00ABCD',
      image: 'assets/images/services/mining.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (frag) {
        setTimeout(() => {
          const el = document.getElementById(frag);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }
}
