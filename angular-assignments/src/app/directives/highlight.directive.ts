import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 

  constructor(private el: ElementRef) { }
 @Input('appHighlight') speed: number = 0;

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = "#a3ce87";
    (this.el.nativeElement as HTMLElement).style.transition = "all" + this.speed + "s";
  }

  @HostListener('mouseleave')onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = "#578538";
  }

}
