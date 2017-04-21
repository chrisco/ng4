import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'lightYellow';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'paleGreen');
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.backgroundColor = 'paleGreen';
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.backgroundColor = 'lightYellow';
  }
}
