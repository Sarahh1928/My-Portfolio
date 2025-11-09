import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OutputEmitterRef } from '@angular/core';

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

  closeDetails() {
    this.close.emit();
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
