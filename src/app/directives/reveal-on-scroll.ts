import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]'
})
export class RevealOnScrollDirective implements OnInit {
  @Input() direction: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  @Input() distance: string = '30px'; // movement distance
  @Input() duration: string = '0.6s'; // transition duration
  @Input() scale: boolean = false;    // enable scale effect

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // Determine initial transform based on direction
    let transformValue = '';
    switch (this.direction) {
      case 'top':
        transformValue = `translateY(-${this.distance})`;
        break;
      case 'bottom':
        transformValue = `translateY(${this.distance})`;
        break;
      case 'left':
        transformValue = `translateX(-${this.distance})`;
        break;
      case 'right':
        transformValue = `translateX(${this.distance})`;
        break;
    }

    if (this.scale) {
      transformValue += ' scale(0.5)'; // start smaller
    }

    // Set initial styles
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', transformValue);
    this.renderer.setStyle(
      element,
      'transition',
      `opacity ${this.duration} ease-out, transform ${this.duration} ease-out`
    );

    // Intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate in
          this.renderer.setStyle(element, 'opacity', '1');
          this.renderer.setStyle(element, 'transform', 'translate(0, 0) scale(1)');
          observer.unobserve(element); // trigger only once
        }
      });
    }, { threshold: 0.2 });

    observer.observe(element);
  }
}
