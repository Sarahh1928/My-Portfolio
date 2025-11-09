import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, OutputEmitterRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {


  @Output() close = new EventEmitter<void>();

  @Input() project!: {
    title: string;
    description: string;
    role?: string;
    duration?: string;
    status?: string;
    features?: string[];
    techStack?: string[];
    images?: string[];
    links?: { text: string; url: string }[];
  };
  currentImageIndex = 0;

  @ViewChild('detailsCard') detailsCard!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    // Trigger animation after a tiny delay to ensure element is in DOM
    setTimeout(() => {
      this.detailsCard.nativeElement.classList.add('show');
    }, 50);
  }

  closeDetails() {
  if (this.detailsCard) {
    const cardEl = this.detailsCard.nativeElement;
    cardEl.classList.remove('show');
    cardEl.classList.add('closing');

    // Wait for the animation to finish before emitting close
    setTimeout(() => this.close.emit(), 400); // match slideUpClose duration
  } else {
    this.close.emit();
  }
}


  prevImage() {
    if (!this.project?.images) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  nextImage() {
    if (!this.project?.images) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }
}
