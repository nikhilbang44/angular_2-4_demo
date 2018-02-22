import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef , private renderer: Renderer2) { }
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  ngOnInit()
  {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }


  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    this.backgroundColor = 'blue' ;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    this.backgroundColor = 'transparent';
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  } 
}
