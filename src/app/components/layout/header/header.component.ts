import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  fragment?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  navItems: NavItem[] = [
    { label: 'Ana Sayfa', route: '/' },
    {
      label: 'Kurumsal',
      children: [
        { label: 'Hakkımızda', route: '/kurumsal/hakkimizda' },
        { label: 'Markalarımız', route: '/kurumsal/markalarimiz' }
      ]
    },
    {
      label: 'Çözümlerimiz',
      children: [
        { label: 'Kamera Sistemleri', route: '/cozumlerimiz/kamera-sistemleri' },
        { label: 'Ses Sistemleri', route: '/cozumlerimiz/ses-sistemleri' },
        { label: 'Haberleşme Sistemleri', route: '/cozumlerimiz/haberlesme-sistemleri' },
        { label: 'Maden Ekipmanları', route: '/cozumlerimiz/maden-ekipmanlari' },
        { label: 'Güç Elektroniği', route: '/cozumlerimiz/guc-elektronigi' },
        { label: 'Elektrikli Arazi Aracı', route: '/cozumlerimiz/elektrikli-arazi-araci' },
        { label: 'Kontrol Merkezi Çözümleri', route: '/cozumlerimiz/kontrol-merkezi' }
      ]
    },
    {
      label: 'Hizmetlerimiz',
      children: [
        { label: 'İhtiyaç Analizi', route: '/sureclerimiz', fragment: 'ihtiyac-analizi' },
        { label: 'Projelendirme', route: '/sureclerimiz', fragment: 'projelendirme' },
        { label: 'Uygulama & Kurulum', route: '/sureclerimiz', fragment: 'uygulama-kurulum' },
        { label: 'Devreye Alma', route: '/sureclerimiz', fragment: 'devreye-alma' },
        { label: 'Bakım - Onarım', route: '/sureclerimiz', fragment: 'bakim-onarim' }
      ]
    },
    {
      label: 'Ürünlerimiz',
      children: [
        { label: 'SQL Serisi', route: '/urunlerimiz', fragment: 'sql-serisi' },
        { label: 'OF Serisi', route: '/urunlerimiz', fragment: 'of-serisi' },
        { label: 'PETEK Serisi', route: '/urunlerimiz', fragment: 'petek-serisi' },
        { label: 'Madenci Kafa Lambası', route: '/urunlerimiz', fragment: 'madenci-kafa-lambasi' },
        { label: 'Maden Aydınlatma', route: '/urunlerimiz', fragment: 'maden-aydinlatma' }
      ]
    },
    { label: 'Bize Ulaşın', route: '/iletisim' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(label: string) {
    this.activeDropdown = this.activeDropdown === label ? null : label;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }
}
