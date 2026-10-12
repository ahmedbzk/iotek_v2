import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HakkimizdaComponent } from './pages/kurumsal/hakkimizda/hakkimizda.component';
import { MarkalarimizComponent } from './pages/kurumsal/markalarimiz/markalarimiz.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CameraSystemsComponent } from './pages/cozumlerimiz/camera-systems/camera-systems.component';
import { SoundSystemsComponent } from './pages/cozumlerimiz/sound-systems/sound-systems.component';
import { CommunicationSystemsComponent } from './pages/cozumlerimiz/communication-systems/communication-systems.component';
import { MiningEquipmentComponent } from './pages/cozumlerimiz/mining-equipment/mining-equipment.component';
import { PowerElectronicsComponent } from './pages/cozumlerimiz/power-electronics/power-electronics.component';
import { ElectricVehicleComponent } from './pages/cozumlerimiz/electric-vehicle/electric-vehicle.component';
import { ControlCenterComponent } from './pages/cozumlerimiz/control-center/control-center.component';
import { SureclerimizComponent } from './pages/sureclerimiz/sureclerimiz.component';

import { UrunlerimizComponent } from './pages/urunlerimiz/urunlerimiz.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Iotek Teknoloji - Güvenli altyapılar, akıllı çözümler.'
  },
  {
    path: 'urunlerimiz',
    component: UrunlerimizComponent,
    title: 'Ürünlerimiz | Iotek Teknoloji'
  },
  {
    path: 'kurumsal/hakkimizda',
    component: HakkimizdaComponent,
    title: 'Hakkımızda | Iotek Teknoloji'
  },
  {
    path: 'kurumsal/markalarimiz',
    component: MarkalarimizComponent,
    title: 'Markalarımız | Iotek Teknoloji'
  },
  {
    path: 'iletisim',
    component: ContactComponent,
    title: 'İletişim | Iotek Teknoloji'
  },

  // Çözümlerimiz Rotaları
  {
    path: 'cozumlerimiz/kamera-sistemleri',
    component: CameraSystemsComponent,
    title: 'Kamera Sistemleri | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/haberlesme-sistemleri',
    component: CommunicationSystemsComponent,
    title: 'Haberleşme Sistemleri | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/ses-sistemleri',
    component: SoundSystemsComponent,
    title: 'Ses Sistemleri | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/maden-ekipmanlari',
    component: MiningEquipmentComponent,
    title: 'Maden Ekipmanları | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/guc-elektronigi',
    component: PowerElectronicsComponent,
    title: 'Güç Elektroniği | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/kontrol-merkezi',
    component: ControlCenterComponent,
    title: 'Kontrol Merkezi Çözümleri | Iotek Teknoloji'
  },
  {
    path: 'cozumlerimiz/elektrikli-arazi-araci',
    component: ElectricVehicleComponent,
    title: 'Elektrikli Arazi Aracı | Iotek Teknoloji'
  },
  
  // Süreçlerimiz Rotası (Süreçler)
  {
    path: 'sureclerimiz',
    component: SureclerimizComponent,
    title: 'Süreçlerimiz | Iotek Teknoloji'
  },

  { path: 'hakkimizda', redirectTo: 'kurumsal/hakkimizda' },
  { path: 'hizmetler/kamera-sistemleri', redirectTo: 'cozumlerimiz/kamera-sistemleri' },
  { path: 'hizmetler/haberlesme-sistemleri', redirectTo: 'cozumlerimiz/haberlesme-sistemleri' },
  { path: 'hizmetler/ses-sistemleri', redirectTo: 'cozumlerimiz/ses-sistemleri' },
  { path: 'hizmetler/maden-ekipmanlari', redirectTo: 'cozumlerimiz/maden-ekipmanlari' },
  { path: 'hizmetler/guc-elektronigi', redirectTo: 'cozumlerimiz/guc-elektronigi' },
  { path: 'hizmetler/kontrol-merkezi', redirectTo: 'cozumlerimiz/kontrol-merkezi' },
  { path: 'hizmetler/elektrikli-arazi-araci', redirectTo: 'cozumlerimiz/elektrikli-arazi-araci' },

  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Sayfa Bulunamadı | Iotek Teknoloji'
  }
];
