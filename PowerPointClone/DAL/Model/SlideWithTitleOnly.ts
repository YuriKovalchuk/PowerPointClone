import SlideBase = require('../Model/SlideBase');
import EnumsModule = require('../../Enums/SlideType');

module Slides {
    export class SlideWithTitleOnly extends SlideBase.SlideBase {
        slideType: EnumsModule.SlideType;

        constructor(
            title: string) {

            this.slideType = EnumsModule.SlideType.TitleWithText;
            super(this.slideType, title);
        }
    }
}
export = Slides;