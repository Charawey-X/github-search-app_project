import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
		this.textHighlight("translateY(-1rem)")
  }

  @HostListener('mouseleave') onMouseLeave() {
		this.textHighlight("translateY(0rem)")
  }

  private textHighlight(action: string){
    this.elem.nativeElement.style.transform = action
  }

}
