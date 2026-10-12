import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HERO_SLIDES } from '../../../data/app.data';
import { HeroSlide } from '../../../models/types.model';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: HeroSlide[] = HERO_SLIDES;

  activeIndex = signal(0);
  isAnimating = signal(false);
  isPaused = signal(false);
  progress = signal(0);

  currentSlide = computed(() => this.slides[this.activeIndex()]);

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private progressTimer: ReturnType<typeof setInterval> | null = null;
  private readonly SLIDE_DURATION = 5000;
  private readonly PROGRESS_INTERVAL = 50;

  // Touch tracking
  private touchStartX = 0;
  private touchStartY = 0;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  goTo(index: number): void {
    if (this.isAnimating() || index === this.activeIndex()) return;
    this.isAnimating.set(true);
    this.activeIndex.set(index);
    this.resetProgress();
    setTimeout(() => this.isAnimating.set(false), 700);
  }

  next(): void {
    const next = (this.activeIndex() + 1) % this.slides.length;
    this.goTo(next);
  }

  prev(): void {
    const prev = (this.activeIndex() - 1 + this.slides.length) % this.slides.length;
    this.goTo(prev);
  }

  onMouseEnter(): void {
    this.isPaused.set(true);
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    this.isPaused.set(false);
    this.startAutoPlay();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    const deltaY = Math.abs(event.changedTouches[0].clientY - this.touchStartY);
    if (Math.abs(deltaX) > 50 && deltaY < 80) {
      deltaX < 0 ? this.next() : this.prev();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft')  this.prev();
  }

  private startAutoPlay(): void {
    this.resetProgress();
    this.autoPlayTimer = setInterval(() => this.next(), this.SLIDE_DURATION);
    this.progressTimer = setInterval(() => {
      this.progress.update(v => Math.min(v + (this.PROGRESS_INTERVAL / this.SLIDE_DURATION) * 100, 100));
    }, this.PROGRESS_INTERVAL);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer)  { clearInterval(this.autoPlayTimer);  this.autoPlayTimer  = null; }
    if (this.progressTimer) { clearInterval(this.progressTimer); this.progressTimer = null; }
  }

  private resetProgress(): void {
    this.progress.set(0);
  }
}
