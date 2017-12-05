import { ElementRef, Renderer, AfterViewInit } from '@angular/core';
export declare class TooltipBox implements AfterViewInit {
    elementRef: ElementRef;
    private rnd;
    fadeState: string;
    text: string;
    arrow: string;
    posTop: number;
    posLeft: number;
    getNativeElement(): HTMLElement;
    init: Promise<void>;
    private initResolve;
    constructor(elementRef: ElementRef, rnd: Renderer);
    ngAfterViewInit(): void;
}
