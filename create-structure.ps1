# Iotek v2 Angular Component & Page Structure Generator

# Layout Components
ng generate component components/layout/footer --skip-tests
ng generate component components/layout/page-banner --skip-tests
ng generate component components/layout/navbar --skip-tests

# Shared / UI Components
ng generate component components/shared/section-title --skip-tests
ng generate component components/shared/button --skip-tests
ng generate component components/shared/card --skip-tests
ng generate component components/shared/product-card --skip-tests
ng generate component components/shared/stats-counter --skip-tests
ng generate component components/shared/partner-logos --skip-tests
ng generate component components/shared/breadcrumb --skip-tests
ng generate component components/shared/contact-form --skip-tests

# Home Page Sections
ng generate component components/home/hero-slider --skip-tests
ng generate component components/home/about-section --skip-tests
ng generate component components/home/services-section --skip-tests
ng generate component components/home/products-grid --skip-tests
ng generate component components/home/cta-banner --skip-tests
ng generate component components/home/partners-section --skip-tests
ng generate component components/home/faq-section --skip-tests

# Pages
ng generate component pages/home --skip-tests
ng generate component pages/about --skip-tests
ng generate component pages/contact --skip-tests
ng generate component pages/services/camera-systems --skip-tests
ng generate component pages/services/sound-systems --skip-tests
ng generate component pages/services/communication-systems --skip-tests
ng generate component pages/services/mining-equipment --skip-tests
ng generate component pages/services/power-electronics --skip-tests
ng generate component pages/services/electric-vehicle --skip-tests
ng generate component pages/services/control-center --skip-tests
ng generate component pages/not-found --skip-tests

Write-Host "All components generated successfully!" -ForegroundColor Green
