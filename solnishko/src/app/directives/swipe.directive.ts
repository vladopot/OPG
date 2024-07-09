import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[appSwipe]',
  standalone: true
})
export class SwipeDirective {

  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  private startX: number = 0;
  private startY: number = 0;

  private el = inject(ElementRef);

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.startX = event.changedTouches[0].screenX;
    this.startY = event.changedTouches[0].screenY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    const endX = event.changedTouches[0].screenX;
    const endY = event.changedTouches[0].screenY;
    this.handleSwipe(this.startX, this.startY, endX, endY);
  }

  private handleSwipe(startX: number, startY: number, endX: number, endY: number): void {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY && absDeltaX > 30) {
      if (deltaX > 0) {
        this.swipeRight.emit();
      } else {
        this.swipeLeft.emit();
      }
    }
  }
}
