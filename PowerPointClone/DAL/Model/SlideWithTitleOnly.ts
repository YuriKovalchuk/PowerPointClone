import SlideBase = require('../Model/SlideBase');
import SlideType = require('../../Enums/SlideType');

module Slides {
    export class SlideWithTitleOnly extends SlideBase.SlideBase {
        slideType: SlideType;

        constructor(
            title: string) {

            this.slideType = SlideType.TitleWithText;
            super(this.slideType, title);
        }
    }
}
export = Slides;