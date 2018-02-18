import { Component, OnInit, Input, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef,ContentChild } from '@angular/core';
import { ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit,
 OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked ,OnDestroy,ViewChild{
  @Input('srvElement') element: {type: string, name: string, content: string} ;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  @Input() name: string;
  constructor() {
    console.log('construnctor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('construnctor called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Text Contrent of paragraph:'+ this.paragraph.nativeElement.textContent);
  }
  
  ngDoCheck()
  {
    console.log('called ngDocheck');
  }

  ngAfterContentInit()
  {
    console.log("called content ngAfterContentInit");
    console.log('Text Contrent of paragraph:' + this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked()
  {
    console.log("called content ngAfterContentChecked");
  }

  ngAfterViewInit()  {
      console.log("ngAfterViewInit called");
      console.log(this.header.nativeElement.textContent);
      
  }

  ngAferViewChecked()
  {
    console.log(" ngAferViewChecked called!");
  }

  ngOnDestroy()
  {
      console.log("ngOnDestory called!");
  }



}
