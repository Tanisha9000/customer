import { ElementRef, ApplicationRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';
export declare class Tooltip implements AfterViewInit {
    private el;
    private appRef;
    private platform;
    private _componentFactoryResolver;
    tooltip: string;
    positionV: string;
    positionH: string;
    event: 'press' | 'click' | 'hover';
    navTooltip: boolean;
    arrow: boolean;
    duration: number;
    active: boolean;
    private _arrow;
    private _navTooltip;
    private tooltipElement;
    private tooltipTimeout;
    private _canShow;
    private _active;
    constructor(el: ElementRef, appRef: ApplicationRef, platform: Platform, _componentFactoryResolver: ComponentFactoryResolver);
    /**
     * Show the tooltip immediately after initiating view if set to
     */
    ngAfterViewInit(): void;
    /**
     * @return {boolean} TRUE if the tooltip can be shown
     */
    /**
     * Set the canShow property
     * Ensure that tooltip is shown only if the tooltip string is not falsey
     */
    canShow: boolean;
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    trigger(): void;
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    showTooltip(): void;
    private _createTooltipComponent();
    private _getTooltipPosition();
    private _removeTooltip();
    private _resetTimer();
}
