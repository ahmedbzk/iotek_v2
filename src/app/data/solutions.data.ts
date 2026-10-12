export interface SolutionCapability {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionStat {
  value: string;
  label: string;
}

export interface SolutionDetail {
  slug: string;
  title: string;
  badge: string;
  heroSubtitle: string;
  bannerImage: string;
  overviewImage: string;
  overviewBadge: string;
  overviewHeading: string;
  description1: string;
  description2: string;
  stats: SolutionStat[];
  capabilities: SolutionCapability[];
  technicalHighlights: string[];
  featuresList: string[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  'kamera-sistemleri': {
    slug: 'kamera-sistemleri',
    title: 'Kamera Sistemleri',
    badge: 'Akıllı Güvenlik ve Görüntüleme',
    heroSubtitle: 'Kristal berraklığında detay, her saniyede tam hakimiyet; güvenliği izlemekle kalmayın, her ayrıntıya hükmedin.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Kamera-Sistemleri-–-Cozumlerimiz-1.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/shutterstock_1699282813-e1766134492166.jpg',
    overviewBadge: 'AI & IVS Destekli Altyapı',
    overviewHeading: 'IP Tabanlı, Ölçeklenebilir Kamera ve Akıllı Video Analitik Sistemleri',
    description1: 'IP tabanlı, ölçeklenebilir kamera altyapılarıyla tesislerinizi uçtan uca güvence altına alıyoruz. Gelişmiş görüntü işleme ve olay algılama (AI) yetenekleriyle anomali tespiti, istilacı algılama, kişi/araç sınıflandırma ve alan ihlali senaryolarını gerçek zamanlı yönetiyoruz.',
    description2: 'Keşif, projelendirme, kurulum, devreye alma ve bütünleşik izleme süreçlerinde tek elden, uluslararası standartlara uygun anahtar teslim çözümler sunuyoruz. Zorlu çevre koşullarına dayanıklı endüstriyel kameralar ile kritik tesislerin güvenliğini 7/24 kesintisiz kılıyoruz.',
    stats: [
      { value: '4K/8K', label: 'Ultra HD Çözünürlük' },
      { value: '%99.9', label: 'Kayıt ve Uptime Süresi' },
      { value: 'AI/IVS', label: 'Yapay Zeka Analitiği' },
      { value: '7/24', label: 'Merkezi Canlı İzleme' }
    ],
    capabilities: [
      {
        title: 'IP Kamera Çözümleri',
        description: 'Sabit, Dome, PTZ, Termal ve patlamaya dayanıklı Exproof endüstriyel kamera modelleriyle her koşulda net görüntü.',
        icon: 'camera'
      },
      {
        title: 'NVR ve Kayıt Altyapısı',
        description: 'Yüksek kapasiteli, RAID yedekli, kesintisiz veri saklama sağlayan profesyonel NVR sunucuları ve depolama üniteleri.',
        icon: 'server'
      },
      {
        title: 'Video Analitik (AI / IVS)',
        description: 'Yüz tanıma, plaka okuma, sınır ihlali, kayıp nesne ve kalabalık yoğunluk analiziyle proaktif tehdit tespiti.',
        icon: 'cpu'
      },
      {
        title: 'Ağ ve Depolama (NAS/SAN)',
        description: 'Bant genişliği planlaması, izole güvenlik VLAN ağları ve yüksek hızlı NAS/SAN merkezi veri depolama entegrasyonu.',
        icon: 'database'
      },
      {
        title: 'Bulut & Uzak İzleme',
        description: 'Güvenli şifreli mobil uygulama ve web konsolu ile dünyanın her yerinden tüm kameraları tek panelden yönetin.',
        icon: 'cloud'
      },
      {
        title: 'Siber Güvenlik & Yetkilendirme',
        description: 'Uçtan uca şifreleme, iki aşamalı doğrulama, kullanıcı rol matrisleri ve siber saldırılara karşı sertifikalı koruma.',
        icon: 'shield'
      }
    ],
    technicalHighlights: [
      'H.265+ akıllı video sıkıştırma algoritması ile %70 bant genişliği ve depolama tasarrufu',
      'IP67 ve IK10 vandalizme karşı dayanıklı dış ortam zırhlı muhafaza',
      'SCADA, yangın algılama ve kartlı geçiş sistemleriyle çift yönlü otomasyon entegrasyonu',
      'Düşük ışık ve zifiri karanlık için Starlight ve Termal algılama sensörleri'
    ],
    featuresList: [
      'IP Kamera Çözümleri (sabit, dome, PTZ, termal)',
      'NVR ve Kayıt Altyapısı',
      'Video Analitik (AI/IVS) ve Olay Yönetimi',
      'Ağ ve Depolama (NAS/SAN, bant genişliği planlama)',
      'Bulut İzleme, Mobil Erişim ve Uzak Yönetim',
      'Siber Güvenlik ve Erişim Yetkilendirme'
    ]
  },

  'haberlesme-sistemleri': {
    slug: 'haberlesme-sistemleri',
    title: 'Haberleşme Sistemleri',
    badge: 'Kesintisiz Kurumsal Ağ Altyapısı',
    heroSubtitle: 'Sınırları aşan kesintisiz bağlantı; dünyanın neresinde olursanız olun, en zor koşullarda bile kopmayan iletişim ağı.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Haberlesme-Sistemleri.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/shutterstock_2199026911.jpg',
    overviewBadge: 'Uçtan Uca Endüstriyel İletişim',
    overviewHeading: 'Geniş Alan Haberleşmesi, Fiber Omurga ve Endüstriyel IoT Ağları',
    description1: 'Zorlu sahalarda kesintisiz görüntü, ses ve veri için uçtan uca haberleşme altyapıları tasarlıyor, kuruyor ve yönetiyoruz. Fiber omurgadan PtP/PtMP kablosuz linklere, telsiz/trunk çözümlerinden LTE/5G ve IoT/LoRaWAN ağlarına kadar farklı teknolojileri aynı mimaride bütünleştiriyoruz.',
    description2: 'Düşük gecikme, yüksek erişilebilirlik ve güvenli şifreleme politikalarıyla operasyonel sürekliliği güvence altına alıyoruz. Sahada keşif ve RF planlamasından anahtar teslim kuruluma, 7/24 aktif izlemeden önleyici bakıma kadar tüm süreçleri profesyonel mühendislik ekibimizle tek elden yürütüyoruz.',
    stats: [
      { value: '100 Gbps', label: 'Fiber Taşıma Hızı' },
      { value: '< 2 ms', label: 'Ultra Düşük Gecikme' },
      { value: '50+ km', label: 'PtP Kablosuz Menzil' },
      { value: '7/24', label: 'Aktif Ağ İzleme' }
    ],
    capabilities: [
      {
        title: 'Ağ Tasarım & Optimizasyon',
        description: 'QoS önceliklendirme, kurumsal VLAN segmentasyonu ve yüksek trafik altında kesintisiz veri akışı mimarisi.',
        icon: 'network'
      },
      {
        title: 'Fiber Optik Altyapılar',
        description: 'FTTx projeleri, yedekli halka (ring) topolojisi tasarımı, füzyon ekleme ve hassas OTDR sertifikasyon testleri.',
        icon: 'zap'
      },
      {
        title: 'PtP & PtMP Kablosuz Linkler',
        description: 'Görüş hattı (LOS) ve zorlu arazilerde (NLOS) kilometrelerce mesafeye yüksek bant genişlikli kablosuz veri aktarımı.',
        icon: 'wifi'
      },
      {
        title: 'Telsiz ve Trunk Sistemleri',
        description: 'DMR ve TETRA tabanlı kurumsal telsiz haberleşmesi; acil durum kanalları ve geniş kapsama alanlı tekrarlayıcılar.',
        icon: 'radio'
      },
      {
        title: 'LoRaWAN Sensör Şebekeleri',
        description: 'Düşük güç tüketimli, pille yıllarca çalışan ve kilometrelerce mesafeye telemetri ileten IoT sensör ağları.',
        icon: 'satellite'
      },
      {
        title: 'Endüstriyel IoT & Telemetri',
        description: 'PLC, SCADA ve uzaktaki saha ekipmanlarının merkezi sunucularla çift yönlü, şifreli ve güvenli haberleşmesi.',
        icon: 'cpu'
      }
    ],
    technicalHighlights: [
      'Gereksinimlere özel yedekli (Ring / Mesh) omurga mimarisi ile sıfır kesinti toleransı',
      'Askeri düzeyde AES-256 veri şifreleme ve siber güvenlik duvarı (Firewall) koruması',
      'Aşırı sıcak, elektromanyetik parazit ve tozlu sahalara uygun endüstriyel switch donanımları',
      'SNMP ve merkezi NMS yazılımları ile hat kopması ve anomali anında otomatik alarm bildirimi'
    ],
    featuresList: [
      'Network Tasarım ve Optimizasyon (QoS, VLAN, segmentasyon)',
      'Fiber Optik Altyapılar (FTTx, ring/topoloji tasarımı)',
      'Noktadan Noktaya (PtP) / Noktadan Çok Noktaya (PtMP) Kablosuz Linkler',
      'Telsiz ve Trunk Sistemleri',
      'LoRaWAN Çözümleri',
      'Nesnelerin İnterneti (IoT) Çözümleri'
    ]
  },

  'ses-sistemleri': {
    slug: 'ses-sistemleri',
    title: 'Ses Sistemleri',
    badge: 'Profesyonel Akustik ve Ses Dağıtımı',
    heroSubtitle: 'Mükemmel akustiğin mühendislikle buluştuğu nokta; sesi sadece duymakla kalmayacak, her frekansta derinliği hissedeceksiniz.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Ses-Sistemleri-1.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/music-controller-foreground.jpg',
    overviewBadge: 'Türk Mühendisliği ve Ar-Ge',
    overviewHeading: 'Endüstriyel Ses Dağıtımı, Acil Anons ve Özel Tasarım Amfi Çözümleri',
    description1: 'Her noktayı doğal berraklıkla duymak isteyenler için, yüksek teknolojiyle üretilmiş Türk mühendisliği eseri ürünler sunuyoruz. Uzun Ar-Ge süreçleriyle rafine edilen tasarımımız, müziğinizi ve anonslarınızı her zamankinden daha canlı, net ve saf biçimde hissetmeniz için tüm frekanslarda gerçekçi ve güçlü ses üretir.',
    description2: 'Ürünlerimiz; kişiselleştirilebilir görünüm, özel ses ayarları ve satış sonrası teknik destekle bir bütün hâline gelir. Fabrikalar, kampüsler, tüneller ve geniş endüstriyel tesisler için EN 54 sertifikalı acil anons ve yangın entegrasyonlu çözümler sağlıyoruz.',
    stats: [
      { value: 'EN 54', label: 'Yangın & Tahliye Onayı' },
      { value: 'Hi-Fi', label: 'Kayıpsız Akustik Netlik' },
      { value: 'D-Sınıfı', label: 'Yüksek Enerji Verimliliği' },
      { value: 'Çok Bölgeli', label: 'IP Matris Yönetimi' }
    ],
    capabilities: [
      {
        title: 'Özel Amfi Üretimi',
        description: 'Yüksek verimli D-Sınıfı devre mimarisi ve özel alüminyum soğutmalı kasalarla üretilen profesyonel amplifikatörler.',
        icon: 'volume'
      },
      {
        title: 'Özel Akustik Mühendislik',
        description: 'Tesisinizin mimari yapısına göre ses yankı ve anlaşılırlık simülasyonları ile en uygun hoparlör konumlandırması.',
        icon: 'sliders'
      },
      {
        title: 'IP Acil Anons Sistemleri',
        description: 'Yangın ve afet anında otomatik acil durum tahliye mesajı yayını yapan, EN 54-16 standartlarında sertifikalı altyapı.',
        icon: 'bell'
      },
      {
        title: 'Çok Bölgeli (Multi-Zone) Dağıtım',
        description: 'Farklı bina veya atölyelere bağımsız ses akışı sağlayan merkezi dokunmatik veya yazılımsal kontrol matrisleri.',
        icon: 'grid'
      },
      {
        title: 'Taşınabilir Saha Ses Üniteleri',
        description: 'Zorlu arazi ve açık hava operasyonları için bataryalı, hava şartlarına dayanıklı yüksek güçlü mobil hoparlörler.',
        icon: 'briefcase'
      },
      {
        title: 'Teknik Destek ve Bakım',
        description: 'Sistemlerin sürekli kusursuz çalışması için periyodik akustik ölçümler, kablo testleri ve 7/24 servis desteği.',
        icon: 'wrench'
      }
    ],
    technicalHighlights: [
      'Gürültülü endüstriyel ortamlarda dahi konuşma anlaşılırlığı garantisi (STI > 0.60 standardı)',
      'Arka plan gürültü seviyesini dinamik dinleyerek otomatik ses ayarı yapan ortam mikrofonu desteği',
      'Yangın algılama panelleriyle kuru kontak ve IP haberleşme protokolleri üzerinden tam entegrasyon',
      'Ağ üzerinden uzaktan erişim, ses kayıt arşivleme ve zamanlanmış müzik/zil otomasyonu'
    ],
    featuresList: [
      'Amfi Üretimi',
      'Özel Tasarım Amfi Hizmetleri',
      'Teknik Destek ve Bakım',
      'Taşınabilir Ses Üniteleri'
    ]
  },

  'maden-ekipmanlari': {
    slug: 'maden-ekipmanlari',
    title: 'Maden Ekipmanları',
    badge: 'ATEX ve Exproof Sertifikalı Güvenlik',
    heroSubtitle: 'Karanlığın en yoğun olduğu tehlikeli sahalarda güven veren ışık; zorlu şartlar için sarsılmaz bir aydınlatma gücü.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Maden-Ekipmanlari.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/male-worker-with-bulldozer-sand-quarry.jpg',
    overviewBadge: 'Ağır Hizmet ve Yeraltı Güvenliği',
    overviewHeading: 'Zorlu Yeraltı Şartlarına Özel Madenci Lambaları ve Tünel Aydınlatması',
    description1: 'Yeraltı madencilik ortamlarının zorlu koşullarına uygun, şarjlı madenci kafa lambaları ve maden aydınlatma armatürü çözümleri üretiyoruz. Yüksek koruma ve güvenlik standartlarına bağlı kalarak, patlayıcı ortam güvenliği için Exproof gerekliliklerini karşılıyoruz.',
    description2: 'Uzun ömürlü batarya, güçlü ışık performansı ve sağlam gövde tasarımıyla operasyonların kesintisiz, güvenli ve verimli ilerlemesini destekliyoruz. Toz, su, çamur ve darbeye dayanıklı ürünlerimiz yeraltı çalışanlarının en büyük güvencesidir.',
    stats: [
      { value: 'ATEX', label: 'Patlama Güvenliği Onayı' },
      { value: '16+ Saat', label: 'Kesintisiz Çalışma Süresi' },
      { value: 'IP68', label: 'Tam Toz ve Su Geçirmezlik' },
      { value: 'IK10', label: 'Ağır Darbe Dayanımı' }
    ],
    capabilities: [
      {
        title: 'Şarjlı Madenci Kafa Lambaları',
        description: 'ATEX ve IECEx onaylı, ergonomik, hafif ve kaskla tam uyumlu yüksek lümenli madenci baş lambaları.',
        icon: 'sun'
      },
      {
        title: 'Tünel ve Galeri LED Aydınlatma',
        description: 'Metan gazı ve kömür tozu bulunan patlayıcı alanlar (Zone 1 / Zone 21) için sertifikalı Exproof armatürler.',
        icon: 'lightbulb'
      },
      {
        title: 'Ağır Hizmet Zırhlı Gövde',
        description: 'Korozyona dayanıklı alüminyum alaşım ve polikarbonat lens ile sarsıntı ve ezilmelere karşı maksimum direnç.',
        icon: 'shield'
      },
      {
        title: 'Akıllı Şarj İstasyonları',
        description: 'Yüzlerce lambayı eşzamanlı güvenle şarj eden, batarya ömrünü izleyen merkezi şarj panoları.',
        icon: 'battery-charging'
      },
      {
        title: 'Konum Takip (RFID / LoRa) Modülü',
        description: 'Acil durumlarda yer altındaki madencinin anlık konumunu yer üstü kontrol merkezine ileten entegre çip desteği.',
        icon: 'map-pin'
      },
      {
        title: 'Acil Durum SOS Flaşörü',
        description: 'Tehlike anında otomatik veya manuel tetiklenen kırmızı ikaz ve güçlü stroboskopik yardım sinyali.',
        icon: 'alert-triangle'
      }
    ],
    technicalHighlights: [
      'Grup I M1 / M2 ve Grup II ATEX sertifikasyonu ile metanlı kömür ve metal madenlerinde onaylı kullanım',
      'Özel optik odaklama ile hem geniş açı çalışma aydınlatması hem 150+ metre uzun menzil projektör modu',
      'Li-ion bataryalarda entegre mikroişlemcili akım, aşırı voltaj ve kısa devre güvenlik koruma katmanları',
      '-20°C ile +60°C arası aşırı saha sıcaklıklarında performans kaybı olmaksızın stabil ışık akısı'
    ],
    featuresList: [
      'Şarjlı Kafa Lambaları (ATEX uyumlu tasarım, yüksek koruma ve güvenlik)',
      'Uzun batarya ömrü, ergonomik kullanım',
      'Yüksek lümen, homojen ışık dağılımı',
      'Tünel İçi LED Aydınlatma (Patlayıcı ortamlar için güvenlik odaklı çözümler)',
      'Dayanıklı, su-toz-nem ve darbe korumalı armatürler',
      'Enerji verimli, uzun ömürlü LED modüller'
    ]
  },

  'guc-elektronigi': {
    slug: 'guc-elektronigi',
    title: 'Güç Elektroniği',
    badge: 'Kesintisiz ve Akıllı Enerji Yönetimi',
    heroSubtitle: 'Geleceği besleyen kesintisiz ve ölçeklenebilir enerji; kritik operasyonlarınızda durmak bilmeyen, yüksek güvenilirliğe sahip performans.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Guc-Elektronigi.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/circuit-board-close-up-with-different-components.jpg',
    overviewBadge: 'Piltek & Endüstriyel Güç Sistemleri',
    overviewHeading: 'Özel Pil Paketleri, DC-DC / AC-DC Dönüştürücüler ve Akıllı Enerji Çözümleri',
    description1: 'İhtiyaca özel pil paketleri, DC-DC, AC-DC dönüştürücüler ve şarj modülleri tasarlayıp üretiyoruz. Hedef kapasite ve çalışma süresine göre hücre konfigürasyonlarını optimize ediyor; güvenli BMS, termal yönetim ve dayanıklı mekanik tasarımla uzun ömürlü enerji çözümleri sunuyoruz.',
    description2: 'AC-DC ve DC-DC tarafında talep edilen giriş/çıkış değerlerine uygun, yüksek verimli ve kapsamlı koruma devreleriyle donatılmış modüller geliştiriyoruz; proje bazlı entegrasyon ve test süreçlerini uçtan uca yönetiyoruz.',
    stats: [
      { value: '%96+', label: 'Dönüşüm Verimliliği' },
      { value: '3000+', label: 'Şarj Döngü Ömrü' },
      { value: 'Akıllı BMS', label: 'Hücre Dengeleme & Koruma' },
      { value: 'CAN / RS485', label: 'Endüstriyel Veri Yolu' }
    ],
    capabilities: [
      {
        title: 'Özel Pil Paketi Tasarımı',
        description: 'LiFePO4 ve Li-ion hücrelerle müşteriye özel gerilim, kapasite ve mekanik form faktörüne uygun batarya blokları.',
        icon: 'battery'
      },
      {
        title: 'Akıllı Batarya Yönetimi (BMS)',
        description: 'Hücre voltaj dengeleme, aşırı akım, aşırı sıcaklık ve derin deşarj koruması sağlayan yerli yazılımlı BMS kartları.',
        icon: 'cpu'
      },
      {
        title: 'DC-DC Dönüştürücüler',
        description: 'Geniş giriş voltaj aralıklarında çalışan, galvanik izolasyonlu, düşük dalgalanma (low-ripple) özellikli güç modülleri.',
        icon: 'refresh-cw'
      },
      {
        title: 'AC-DC Endüstriyel Güç Üniteleri',
        description: 'PFC güç faktörü düzeltmeli, yüksek sıcaklıkta performans kaybetmeyen kesintisiz güç ve redresör çözümleri.',
        icon: 'zap'
      },
      {
        title: 'Termal ve Mekanik Mühendislik',
        description: 'Hücrelerin ömrünü uzatan optimize edilmiş ısı tahliye kanalları, titreşime dayanıklı sağlam alüminyum gövde.',
        icon: 'layers'
      },
      {
        title: 'Saha Test & Sertifikasyon',
        description: 'EMC, EMI, kısa devre ve termal stres testleri ile uluslararası standartlara tam uyumlu mühendislik raporlaması.',
        icon: 'check-circle'
      }
    ],
    technicalHighlights: [
      'Geniş çalışma sıcaklığı aralığı (-30°C ile +65°C) ve pasif soğutmalı sessiz kompakt dizayn',
      'CAN-Bus, Modbus RTU ve Bluetooth protokolleri ile anlık voltaj, sıcaklık ve SoC (Şarj Durumu) izleme',
      'Modüler hücre yapısı sayesinde kolay kapasite artırımı ve hızlı servis müdahalesi',
      'Ters polarite, aşırı gerilim ve aşırı akım durumlarında mikrosaniyeler içinde devre kesici koruma'
    ],
    featuresList: [
      'Özel Pil Paketleri: Hücre mimarisi (seri/paralel), kapasite ve süre optimizasyonu',
      'Gelişmiş BMS, dengeleme, akım/ısıl koruma mekanizmaları',
      'Mekanik kasa, termal tasarım ve konnektör uyarlama',
      'AC-DC ve DC-DC Dönüştürücüler: İhtiyaca özel giriş/çıkış voltaj ve akım spesifikasyonları',
      'Yüksek verim, düşük ripple/EMI değerleri ve galvanik yalıtım',
      'Kapsamlı koruma devreleri ve uzaktan izleme arayüzleri'
    ]
  },

  'kontrol-merkezi': {
    slug: 'kontrol-merkezi',
    title: 'Kontrol Merkezi Çözümleri',
    badge: '7/24 Kesintisiz Komuta ve İzleme',
    heroSubtitle: 'Karmaşayı disipline eden yönetim mimarisi; stratejik kararların alındığı kalpte, tüm sistemlerin kusursuz senkronizasyonu.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Kontrol-Merkezi-Cozumleri.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/futuristic-technology-concept.jpg',
    overviewBadge: 'Komuta Kontrol & Video Wall',
    overviewHeading: 'Operatör Konsolları, Video Wall Duvarları ve Entegre Otomasyon Mimarisi',
    description1: 'Kritik operasyonlar için kurum ve şirketlerin kontrol merkezlerini uçtan uca tasarlıyor, kuruyor ve devreye alıyoruz. Operatör ergonomisi, akustik ve aydınlatma dengesiyle desteklenen çalışma alanlarını; DLP/LED video duvarları, çok kaynaklı görüntü yönetimi, KVM ve otomasyon altyapılarıyla bütünleştiriyoruz.',
    description2: 'Sistem odası, kablolama, güç–soğutma ve siber güvenlik katmanlarını yedekli mimaride kurgulayarak 7/24 süreklilik, izlenebilirlik ve ölçeklenebilirlik sağlıyoruz.',
    stats: [
      { value: '7/24', label: 'Kesintisiz Çalışma Süresi' },
      { value: 'ISO 11064', label: 'Ergonomi ve Tasarım Standardı' },
      { value: 'Zero-Latency', label: 'KVM Görüntü Aktarımı' },
      { value: 'MicroLED', label: 'Yüksek Parlaklıklı Video Wall' }
    ],
    capabilities: [
      {
        title: 'Mimari ve Ergonomi Tasarımı',
        description: 'Operatör masaları, görüş hatları, akustik izolasyon, sirkadiyen aydınlatma ve 24/7 konfor odaklı oda yerleşimi.',
        icon: 'layout'
      },
      {
        title: 'Ekran Duvarları (Video Wall)',
        description: 'DLP küpleri, ultra dar çerçeveli LCD ve dikişsiz MicroLED ekranlarla çok pencereli devasa görüntüleme sistemleri.',
        icon: 'monitor'
      },
      {
        title: 'KVM ve Otomasyon Matrisleri',
        description: 'Tek klavye ve fare ile onlarca sunucuyu anında yönetmeyi sağlayan gecikmesiz KVM matrix anahtarlama.',
        icon: 'sliders'
      },
      {
        title: 'Sistem Odası Altyapıları',
        description: 'Rack kabinetler, yedekli UPS güç kaynakları, PDU, hassas in-row iklimlendirme ve gazlı yangın söndürme.',
        icon: 'server'
      },
      {
        title: 'Yapısal Ağ ve Fiber Omurga',
        description: 'Cat6A/Cat7 ve çok modlu/tek modlu fiber optik hatlar, izole omurga switchler ve siber güvenlik duvarları.',
        icon: 'git-branch'
      },
      {
        title: 'Entegrasyon ve Devreye Alma',
        description: 'SCADA, CCTV, harita CBS sistemleri ve alarm yazılımlarının tek ortak kontrol ekranında birleştirilmesi.',
        icon: 'settings'
      }
    ],
    technicalHighlights: [
      'ISO 11064 kontrol merkezi ergonomi standardına tam uyumlu mühendislik ve mimari çizimler',
      'Yedekli güç (Redundant N+1 UPS) ve ikincil jeneratör geçişleri ile sıfır güç kesintisi garantisi',
      'Senaryo tabanlı acil durum otomasyonu: Bir tehdit algılandığında ilgili kamera ve alarmlar ana duvarda otomatik açılır',
      'Operatör masa konsollarında motorlu yükseklik ayarı ve dahili kablo yönetim tünelleri'
    ],
    featuresList: [
      'Mimari ve Ergonomi Tasarımı (Operatör masaları, izleme hatları, akustik ve aydınlatma)',
      'Ekran Duvarları ve Görüntü Sistemleri (DLP/LED/LCD video wall, çok kaynaklı görüntü yönetimi)',
      'Kontrol ve Otomasyon Sistemleri (KVM matrisleri, dokunmatik kontrol panelleri, dashboardlar)',
      'Sistem Odası Altyapıları (Rack kabinet, UPS, PDU, in-row soğutma ve çevresel izleme)',
      'Kablolama ve Ağ Altyapısı (Yapısal kablolama, fiber–bakır hat planlama, VLAN/QoS)',
      'Süreklilik ve Güvenlik (7/24 operasyon, felaket kurtarma, CCTV entegrasyonu ve log yönetimi)'
    ]
  },

  'elektrikli-arazi-araci': {
    slug: 'elektrikli-arazi-araci',
    title: 'Elektrikli Arazi Aracı',
    badge: 'İocar & Yeşil Mobilite Teknolojileri',
    heroSubtitle: 'Sahanın ham gücünü geleceğin akıllı verisiyle birleştiriyoruz; operasyonel mükemmellik için teknolojiyi en uç noktaya taşıyoruz.',
    bannerImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/Elektrikli-Arazi-Araci.jpg',
    overviewImage: 'https://iotek.com.tr/wp-content/uploads/2025/12/2221-1.png',
    overviewBadge: 'Sıfır Emisyon & 4x4 Güç',
    overviewHeading: 'Zorlu Arazi Koşullarına Uyumlu, Modüler ve Dayanıklı Elektrikli Platform',
    description1: 'Elektrikli arazi aracı (İocar) projemiz; sürdürülebilir güç aktarımı, çok amaçlı yük taşıma kabiliyeti ve zorlu saha koşullarına uyumlu modüler yapı hedefleriyle geliştirilmektedir. Tasarım yaklaşımımız; 4x4 çekiş mimarisi, yüksek mukavemetli şasi ve işlevsel kasa çözümlerini bir araya getirmektedir.',
    description2: 'Bağ-bahçe işletmelerinden belediye park-bahçe ekiplerine, ormancılık ve kırsal saha operasyonlarına kadar geniş bir kullanım alanını gözetmektedir. Yerinde şarjı destekleyebilecek alternatif enerji altyapılarıyla uyum, sıfır emisyon, düşük gürültü profili ve bakım kolaylığı sunmaktadır. Bizimle iş ortaklığı kurmak ve bayilik fırsatlarından yararlanmak için iletişime geçebilirsiniz.',
    stats: [
      { value: '4x4', label: 'Akıllı Dört Çeker Çekiş' },
      { value: 'Sıfır', label: 'Karbon Emisyonu' },
      { value: '%40+', label: 'Eğim Tırmanma Açısı' },
      { value: '100+ km', label: 'Tek Şarj İle Menzil' }
    ],
    capabilities: [
      {
        title: 'Yüksek Torklu Elektrikli Motor',
        description: 'Düşük devirde maksimum tork sağlayan fırçasız elektrik motorları ile ağır yük altında bile sarsıntısız kalkış.',
        icon: 'zap'
      },
      {
        title: '4x4 Bağımsız Çekiş Sistemi',
        description: 'Zorlu çamur, kum, taşlık ve dik eğimli arazilerde kaymayı önleyen akıllı diferansiyel kilitli güç aktarımı.',
        icon: 'compass'
      },
      {
        title: 'Modüler Kasa Seçenekleri',
        description: 'Damperli yük kasası, personel taşıma kabini, ilaçlama veya itfaiye donanımı gibi ihtiyaca göre değişen üst yapı.',
        icon: 'box'
      },
      {
        title: 'Sıfır Emisyon ve Sessiz Sürüş',
        description: 'İç mekanlar, seralar, turistik tesisler ve doğa koruma alanlarında çevreye ve canlılara zarar vermeyen kullanım.',
        icon: 'feather'
      },
      {
        title: 'Güneş ve Alternatif Şarj Desteği',
        description: 'Şebekenin bulunmadığı uzak tarım ve maden sahalarında güneş enerjisi ve taşınabilir bataryalarla yerinde şarj imkânı.',
        icon: 'sun'
      },
      {
        title: 'Düşük Bakım ve Yerli Destek',
        description: 'İçten yanmalı motorlara kıyasla %80 daha az hareketli parça, düşük bakım maliyeti ve hızlı yedek parça erişimi.',
        icon: 'tool'
      }
    ],
    technicalHighlights: [
      'Güçlendirilmiş elektrostatik boyalı çelik boru şasi ile darbe ve korozyona karşı üstün mukavemet',
      'IP67 yalıtımlı lityum batarya paketi sayesinde sulu ve çamurlu arazilerden güvenli geçiş',
      'Rejeneratif frenleme ile yokuş inişlerde bataryayı otomatik şarj edebilme özelliği',
      'Hızlı ve güvenli standart 220V ev tipi prizden veya endüstriyel şarj istasyonundan dolum'
    ],
    featuresList: [
      '4x4 Çekiş Mimarisi ve Zorlu Saha Dayanımı',
      'Sürdürülebilir Güç Aktarımı ve Sıfır Karbon Ayak İzi',
      'Çok Amaçlı Yük Taşıma ve Modüler Kasa Yapısı',
      'Yerinde Şarj ve Alternatif Enerji Uyumluluğu',
      'Düşük Gürültü Profili ve Titreşimsiz Konforlu Sürüş',
      'Geniş Bayilik ve Kurumsal İş Ortaklığı Olanakları'
    ]
  }
};
