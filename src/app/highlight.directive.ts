import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) {
    }

    @Input('appHighlight') hColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.higthLight(this.hColor || 'red');

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.higthLight(null);
    }

    private higthLight(color: string) {
        this.el.nativeElement.style.background = color;
    }

}