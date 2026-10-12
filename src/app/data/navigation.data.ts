// ─── Navigation Items ───────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  route?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', route: '/' },
  { label: 'Hakkımızda', route: '/hakkimizda' },
  {
    label: 'Çözümlerimiz',
    children: [
      { label: 'Kamera Sistemleri',         route: '/hizmetler/kamera-sistemleri' },
      { label: 'Ses Sistemleri',            route: '/hizmetler/ses-sistemleri' },
      { label: 'Haberleşme Sistemleri',     route: '/hizmetler/haberlesme-sistemleri' },
      { label: 'Maden Ekipmanları',         route: '/hizmetler/maden-ekipmanlari' },
      { label: 'Güç Elektroniği',           route: '/hizmetler/guc-elektronigi' },
      { label: 'Elektrikli Arazi Aracı',    route: '/hizmetler/elektrikli-arazi-araci' },
      { label: 'Kontrol Merkezi Çözümleri', route: '/hizmetler/kontrol-merkezi' },
    ]
  },
  { label: 'İletişim', route: '/iletisim' },
];
