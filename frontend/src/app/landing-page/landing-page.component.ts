import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('click',{static:false}) click: ElementRef<HTMLElement>;
  @ViewChild('click2',{static:false}) click2: ElementRef<HTMLElement>;
  @ViewChild('click3',{static:false}) click3: ElementRef<HTMLElement>;
  @ViewChild('click4',{static:false}) click4: ElementRef<HTMLElement>;
  constructor() { }
   images:any[]=["../../assets/photoshop.png","../../assets/photoshop2.png"]
   interval:any;
  ngOnInit(): void {
    this.start()
  }
  start()
 {
     this.interval = setInterval(()=>
     {
      let el: HTMLElement = this.click.nativeElement;
      let el2: HTMLElement = this.click2.nativeElement;
      let el3: HTMLElement = this.click3.nativeElement;
      let el4: HTMLElement = this.click4.nativeElement;
          el.click()
          el2.click()
          el3.click()
          el4.click()


     },3000)
 }
 
stop()
{
     clearInterval(this.interval)
}

}
