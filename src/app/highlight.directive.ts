import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) {}


    @HostListener('mouseenter') onMouseEnter(){
        this.higthLight('yellow');

    }

    @HostListener('mouseleave') onMouseLeave(){
        this.higthLight(null);
    }

    private higthLight(color: string) {
        this.el.nativeElement.style.background = color;
    }


}