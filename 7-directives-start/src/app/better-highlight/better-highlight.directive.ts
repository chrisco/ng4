import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'paleGreen');
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'paleGreen');
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightYellow');
  }
}
