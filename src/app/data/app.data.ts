import { Service, HeroSlide, StatItem, FaqItem } from '../models/types.model';

// ─── Hero Slider Data ────────────────────────────────────────────────────────
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'kamera',
    heading: 'Kamera Sistemleri Çözümlerimiz',
    subheading: 'Akıllı İzleme Altyapısı',
    description: 'Kendi akıllı izleme altyapınızı oluşturun – Tüm kamera akışlarını tek panelden yönetin.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/kamera-sistemleri',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Kamera-Sistemleri-–-Cozumlerimiz-1.jpg'
  },
  {
    id: 'ses',
    heading: 'Ses Sistemleri',
    subheading: 'Profesyonel Ses Dağıtım Ağı',
    description: 'Profesyonel ses dağıtım ağınızı kurun – Fabrika, tesis ve kampüsler için ideal.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/ses-sistemleri',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Ses-Sistemleri-1.jpg'
  },
  {
    id: 'haberlesme',
    heading: 'Haberleşme Sistemleri',
    subheading: 'Kurumsal Haberleşme Ağı',
    description: 'Kurumsal haberleşme ağınızı merkezileştirin – Ses ve veri iletişimini tek platformda toplayın.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/haberlesme-sistemleri',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Haberlesme-Sistemleri.jpg'
  },
  {
    id: 'maden',
    heading: 'Maden Ekipmanları',
    subheading: 'Akıllı Maden Teknolojileri',
    description: 'Zorlu sahalar için akıllı maden teknolojileri kurun – Güvenli ve verimli operasyonlar.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/maden-ekipmanlari',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Maden-Ekipmanlari.jpg'
  },
  {
    id: 'guc',
    heading: 'Güç Elektroniği',
    subheading: 'Endüstriyel Güç Çözümleri',
    description: 'Enerji verimliliğini maksimize edin – Gelişmiş güç elektroniği sistemleriyle kesintisiz üretim.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/guc-elektronigi',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Guc-Elektronigi.jpg'
  },
  {
    id: 'ev',
    heading: 'Elektrikli Arazi Aracı',
    subheading: 'Sıfır Emisyon, Maksimum Performans',
    description: 'Zorlu arazi koşullarında elektrikli güçle ilerleyin – Çevre dostu ve yüksek performanslı araçlar.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/elektrikli-arazi-araci',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Elektrikli-Arazi-Araci.jpg'
  },
  {
    id: 'kontrol',
    heading: 'Kontrol Merkezi Çözümleri',
    subheading: 'Merkezi Yönetim Platformu',
    description: 'Tüm sistemlerinizi tek merkezden yönetin – 7/24 izleme ve anlık müdahale imkânı.',
    ctaLabel: 'Daha Fazla Bilgi',
    ctaRoute: '/hizmetler/kontrol-merkezi',
    image: 'https://iotek.com.tr/wp-content/uploads/2025/12/Kontrol-Merkezi-Cozumleri.jpg'
  }
];

// ─── Services Data ───────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'kamera-sistemleri',
    title: 'Kamera Sistemleri',
    subtitle: 'Akıllı İzleme Altyapısı',
    description: 'Kendi akıllı izleme altyapınızı oluşturun. Tüm kamera akışlarını tek panelden yönetin.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/04/cctv-izleme-odasi1-2.jpg',
    icon: 'fas fa-video',
    route: '/hizmetler/kamera-sistemleri',
    features: ['IP Kamera Sistemleri', 'Merkezi İzleme', 'Hareket Algılama', '7/24 Kayıt']
  },
  {
    id: '2',
    slug: 'ses-sistemleri',
    title: 'Ses Sistemleri',
    subtitle: 'Profesyonel Ses Dağıtım Ağı',
    description: 'Profesyonel ses dağıtım ağınızı kurun. Fabrika, tesis ve kampüsler için ideal çözümler.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Ses-Sistemleri-1.jpg',
    icon: 'fas fa-volume-up',
    route: '/hizmetler/ses-sistemleri',
    features: ['IP Ses Sistemi', 'Acil Anons', 'Arka Plan Müziği', 'Merkezi Kontrol']
  },
  {
    id: '3',
    slug: 'haberlesme-sistemleri',
    title: 'Haberleşme Sistemleri',
    subtitle: 'Kurumsal Haberleşme Ağı',
    description: 'Kurumsal haberleşme ağınızı merkezileştirin. Ses ve veri iletişimini tek platformda toplayın.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Haberlesme-Sistemleri.jpg',
    icon: 'fas fa-network-wired',
    route: '/hizmetler/haberlesme-sistemleri',
    features: ['Telsiz Sistemleri', 'VoIP Çözümleri', 'Ağ Altyapısı', 'Güvenli İletişim']
  },
  {
    id: '4',
    slug: 'maden-ekipmanlari',
    title: 'Maden Ekipmanları',
    subtitle: 'Akıllı Maden Teknolojileri',
    description: 'Zorlu sahalar için akıllı maden teknolojileri. Güvenli ve verimli operasyonlar.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Maden-Ekipmanlari.jpg',
    icon: 'fas fa-hard-hat',
    route: '/hizmetler/maden-ekipmanlari',
    features: ['Güvenli Ekipmanlar', 'Atex Sertifikalı', 'Uzaktan İzleme', 'Acil Sistemler']
  },
  {
    id: '5',
    slug: 'guc-elektronigi',
    title: 'Güç Elektroniği',
    subtitle: 'Endüstriyel Güç Çözümleri',
    description: 'Enerji verimliliğini maksimize edin. Gelişmiş güç elektroniği sistemleriyle kesintisiz üretim.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Guc-Elektronigi.jpg',
    icon: 'fas fa-bolt',
    route: '/hizmetler/guc-elektronigi',
    features: ['UPS Sistemleri', 'Güç Dağıtımı', 'Enerji Yönetimi', 'Akıllı Şarj']
  },
  {
    id: '6',
    slug: 'elektrikli-arazi-araci',
    title: 'Elektrikli Arazi Aracı',
    subtitle: 'Sıfır Emisyon, Maksimum Performans',
    description: 'Zorlu arazi koşullarında elektrikli güçle ilerleyin. Çevre dostu ve yüksek performanslı araçlar.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Elektrikli-Arazi-Araci.jpg',
    icon: 'fas fa-truck',
    route: '/hizmetler/elektrikli-arazi-araci',
    features: ['Elektrikli Motor', 'Uzun Menzil', 'Zorlu Arazi', 'Düşük Bakım']
  },
  {
    id: '7',
    slug: 'kontrol-merkezi',
    title: 'Kontrol Merkezi Çözümleri',
    subtitle: 'Merkezi Yönetim Platformu',
    description: 'Tüm sistemlerinizi tek merkezden yönetin. 7/24 izleme ve anlık müdahale imkânı.',
    heroImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Kontrol-Merkezi-Cozumleri.jpg',
    icon: 'fas fa-desktop',
    route: '/hizmetler/kontrol-merkezi',
    features: ['SCADA Sistemleri', 'Video Wall', 'Alarm Yönetimi', 'Raporlama']
  }
];

// ─── Stats Data ──────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 20,   suffix: '+', label: 'Yıllık Deneyim' },
  { value: 500,  suffix: '+', label: 'Tamamlanan Proje' },
  { value: 150,  suffix: '+', label: 'Mutlu Müşteri' },
  { value: 7,    suffix: '',  label: 'Ürün Kategorisi' },
];

// ─── FAQ Data ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Iotek Teknoloji hangi sektörlere hizmet vermektedir?',
    answer: 'Iotek Teknoloji; maden, enerji, savunma, endüstriyel tesisler, kampüsler ve büyük ölçekli kurumsal projelere özel teknoloji çözümleri sunmaktadır.',
    isOpen: true
  },
  {
    question: 'Kurulum ve bakım hizmetleri sunuyor musunuz?',
    answer: 'Evet, Iotek Teknoloji tüm ürün ve sistemler için profesyonel kurulum, devreye alma ve periyodik bakım hizmetleri sunmaktadır. 7/24 teknik destek ekibimiz yanınızdadır.',
    isOpen: false
  },
  {
    question: 'Projeleriniz ne kadar sürede tamamlanmaktadır?',
    answer: 'Proje süresi, kapsam ve büyüklüğüne göre değişmektedir. Küçük çaplı projeler birkaç gün içinde tamamlanabilirken, büyük ölçekli entegrasyon projeleri birkaç ay sürebilmektedir.',
    isOpen: false
  },
  {
    question: 'Tüm ürünler için garanti sağlıyor musunuz?',
    answer: 'Evet, tüm ürünlerimiz üretici garantisi kapsamındadır. Ayrıca Iotek Teknoloji olarak kurulum ve işçilik garantisi de sunmaktayız.',
    isOpen: false
  },
  {
    question: 'Uzak sahalara da hizmet götürüyor musunuz?',
    answer: 'Evet, maden ve enerji sektörlerindeki uzak sahalara ekibimizle yerinde hizmet götürmekteyiz. Türkiye\'nin tüm bölgelerinde aktif projelerimiz bulunmaktadır.',
    isOpen: false
  }
];
