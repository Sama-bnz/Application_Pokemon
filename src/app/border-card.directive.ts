import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#007AFF';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
   }

   @Input('pkmnBorderCard') borderColor: string; //avec alias
   //@Input() pkmnBorderCard: string; sans alias

  //  Changement de la couleur de bordure de carte quand la souris est sur une carte pokemon
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }
    //  Retour à la couleur initial quand la souris quitte la carte pokémon
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }


  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
