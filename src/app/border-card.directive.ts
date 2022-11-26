import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180);
   }

  //  Changement de la couleur de bordure de carte quand la souris est sur une carte pokemon
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }
    //  Retour à la couleur initial quand la souris quitte la carte pokémon
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }


  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
