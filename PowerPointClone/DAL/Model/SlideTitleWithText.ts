import SlideBase = require('../Model/SlideBase');
import SlideType = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

module Slides {
    export class SlideTitleWithText extends SlideBase.SlideBase {
        content: string;
        slideType: SlideType;

        constructor(
            title: string,
            content: string) {
            this.slideType = SlideType.TitleWithText;
            super(this.slideType, title);
        }
    }
}

export = Slides;