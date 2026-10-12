import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

interface HeroSlide {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaRoute: string;
  bgImage: string;
}

interface Brand {
  name: string;
  logo: string;
  description: string;
  url: string;
}

interface Service {
  icon: string;
  title: string;
  desc: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoplayInterval: any;

  // Service slider (Center-mode)
  activeServiceIndex = 0;
  private serviceAutoplayInterval: any;

  startServiceAutoplay() {
    this.serviceAutoplayInterval = setInterval(() => {
      this.nextServiceSlide();
    }, 4000); // 4 seconds
  }

  stopServiceAutoplay() {
    if (this.serviceAutoplayInterval) clearInterval(this.serviceAutoplayInterval);
  }

  prevServiceSlide() {
    this.stopServiceAutoplay();
    this.activeServiceIndex = (this.activeServiceIndex - 1 + this.services.length) % this.services.length;
    this.startServiceAutoplay();
  }

  nextServiceSlide() {
    this.stopServiceAutoplay();
    this.activeServiceIndex = (this.activeServiceIndex + 1) % this.services.length;
    this.startServiceAutoplay();
  }

  goToServiceSlide(i: number) {
    this.stopServiceAutoplay();
    this.activeServiceIndex = i;
    this.startServiceAutoplay();
  }


  // Contact form
  contactForm = { name: '', email: '', subject: '', message: '', file: null };
  contactSent = false;

  onContactSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contactSent = true;
    setTimeout(() => {
      this.contactSent = false;
      form.resetForm({ subject: '' });
      this.contactForm = { name: '', email: '', subject: '', message: '', file: null };
    }, 5000);
  }

  slides: HeroSlide[] = [
    {
      tag: 'Çözümlerimiz',
      title: 'Kamera Sistemleri',
      subtitle: 'Kendi Akıllı İzleme Altyapınızı Oluşturun',
      description: 'Tüm kamera akışlarını tek panelden yönetin. IP kamera, NVR/DVR ve merkezi izleme çözümleriyle güvenliğinizi güçlendirin.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/kamera-sistemleri',
      bgImage: 'assets/images/hero-camera.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Ses Sistemleri',
      subtitle: 'Profesyonel Ses Dağıtım Ağınızı Kurun',
      description: 'Fabrika, tesis ve kampüsler için ideal ses ve anons sistemleri. Merkezi kontrol ile kusursuz ses yönetimi.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/ses-sistemleri',
      bgImage: 'assets/images/hero-sound.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Haberleşme Sistemleri',
      subtitle: 'Kurumsal Haberleşme Ağınızı Merkezileştirin',
      description: 'Ses ve veri iletişimini tek platformda toplayın. Saha ve merkez arasındaki bağlantıyı güçlendirin.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/haberlesme-sistemleri',
      bgImage: 'assets/images/hero-comm.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Maden Ekipmanları',
      subtitle: 'Zorlu Sahalar İçin Akıllı Maden Teknolojileri',
      description: 'Sert koşullara dayanıklı iletişim ekipmanları ve izleme sistemleriyle maden operasyonlarınızı güvence altına alın.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/maden-ekipmanlari',
      bgImage: 'assets/images/hero-mining.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Güç Elektroniği',
      subtitle: 'Enerji Verimliliğinizi Maksimize Edin',
      description: 'Güç kaynaklarından enerji depolama sistemlerine kadar endüstriyel güç elektroniği çözümleri.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/guc-elektronigi',
      bgImage: 'assets/images/hero-power.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Elektrikli Arazi Aracı',
      subtitle: 'Sıfır Emisyonlu Saha Operasyonları',
      description: 'Maden ve endüstriyel sahalar için özel tasarlanmış elektrikli arazi araçları ile operasyon maliyetlerinizi düşürün.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/elektrikli-arazi-araci',
      bgImage: 'assets/images/hero-ev.jpg'
    },
    {
      tag: 'Çözümlerimiz',
      title: 'Kontrol Merkezi Çözümleri',
      subtitle: 'Tüm Sistemlerinizi Tek Merkezden Yönetin',
      description: 'Güvenlik, haberleşme ve otomasyon sistemlerinizi entegre eden akıllı kontrol merkezi çözümleri.',
      cta: 'Daha Fazla Bilgi',
      ctaRoute: '/hizmetler/kontrol-merkezi',
      bgImage: 'assets/images/hero-control.jpg'
    }
  ];

  brands: Brand[] = [
    {
      name: 'Beeses Audio Technologies',
      logo: 'assets/BeesesLogo.png',
      description: 'Profesyonel ses sistemleri ve akustik çözümler',
      url: '#'
    },
    {
      name: 'Piltek Elektronik',
      logo: 'assets/PiltekLogo.png',
      description: 'Güç elektroniği ve enerji yönetim sistemleri',
      url: '#'
    },
    {
      name: 'IOCAR Electrical',
      logo: 'assets/IocarLogo.png',
      description: 'Elektrikli araç ve otomasyon çözümleri',
      url: '#'
    }
  ];

  services: Service[] = [
    { icon: 'camera', title: 'Kamera Sistemleri', desc: 'IP kamera, güvenlik ve izleme', route: '/hizmetler/kamera-sistemleri', image: 'assets/images/services/camera.jpg' },
    { icon: 'sound', title: 'Ses Sistemleri', desc: 'Kurumsal ses ve anons sistemleri', route: '/hizmetler/ses-sistemleri', image: 'assets/images/services/sound.jpg' },
    { icon: 'comm', title: 'Haberleşme Sistemleri', desc: 'Telsiz ve iletişim sistemleri', route: '/hizmetler/haberlesme-sistemleri', image: 'assets/images/services/comm.jpg' },
    { icon: 'mining', title: 'Maden Ekipmanları', desc: 'Saha ve maden iletişim ekipmanları', route: '/hizmetler/maden-ekipmanlari', image: 'assets/images/services/mining.jpg' },
    { icon: 'power', title: 'Güç Elektroniği', desc: 'Enerji yönetim ve güç sistemleri', route: '/hizmetler/guc-elektronigi', image: 'assets/images/services/power.jpg' },
    { icon: 'ev', title: 'Elektrikli Arazi Aracı', desc: 'Sıfır emisyonlu saha araçları', route: '/hizmetler/elektrikli-arazi-araci', image: 'assets/images/services/ev.jpg' },
    { icon: 'control', title: 'Kontrol Merkezi Çözümleri', desc: 'Akıllı kontrol merkezi çözümleri', route: '/hizmetler/kontrol-merkezi', image: 'assets/images/services/control.jpg' },
  ];

  stats = [
    { value: '50+', label: 'Tamamlanan Proje' },
    { value: '10+', label: 'Yıllık Deneyim' },
    { value: '50+', label: 'Kurumsal Müşteri' },
  ];

  ngOnInit() { 
    this.startAutoplay(); 
    this.startServiceAutoplay();
  }
  ngOnDestroy() { 
    this.stopAutoplay(); 
    this.stopServiceAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.nextSlide(), 8000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
  }

  goToSlide(index: number) {
    this.stopAutoplay();
    this.currentSlide = index;
    this.startAutoplay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.stopAutoplay();
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.startAutoplay();
  }
}
