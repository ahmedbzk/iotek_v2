import { Component, Input, OnInit, OnChanges, SimpleChanges, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SolutionDetail, SOLUTIONS_DATA } from '../../../data/solutions.data';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solution-detail.component.html',
  styleUrl: './solution-detail.component.scss'
})
export class SolutionDetailComponent implements OnInit, OnChanges {
  @Input({ required: true }) slug!: string;

  solution!: SolutionDetail;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.loadSolution();
    this.scrollToTop();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slug']) {
      this.loadSolution();
      this.scrollToTop();
    }
  }

  private loadSolution(): void {
    if (this.slug && SOLUTIONS_DATA[this.slug]) {
      this.solution = SOLUTIONS_DATA[this.slug];
    } else {
      this.solution = SOLUTIONS_DATA['kamera-sistemleri'];
    }
  }

  private scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }

  get otherSolutions(): SolutionDetail[] {
    return Object.values(SOLUTIONS_DATA).filter(s => s.slug !== this.slug);
  }

  scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
