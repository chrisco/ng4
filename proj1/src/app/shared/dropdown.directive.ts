import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // TODO: Implement something like this, instead:
  // https://christianliebel.com/2016/05/angular-2-a-simple-click-outside-directive/
  @HostListener('mouseleave') closeDropdown() {
    setTimeout(() => {
      this.isOpen = false;
    }, 1000);
  }
}
