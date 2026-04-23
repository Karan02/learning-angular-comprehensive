import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
// custom directive
@Directive({
  selector: '[appInputFormat]',
})
export class InputFormat {

   constructor(private el:ElementRef) {}

  // @Input('format') format: any;
  @Input('appInputFormat') format: any;
  @HostListener('focus') onFocus(){
    console.log('On Focus')
  }

  @HostListener('blur') onBlur(){
    console.log('On Blur')
    let value:string = this.el.nativeElement.value
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase()
    else
      this.el.nativeElement.value = value.toUpperCase()
  }

 
}
