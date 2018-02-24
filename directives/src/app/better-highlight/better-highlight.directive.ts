import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef , private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @Input() defaultColor: string = 'transparent';
  ngOnInit()
  {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }


  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    this.backgroundColor = this.defaultColor ;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    this.backgroundColor = this.highlightColor;
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  } 
}
