import SlideBase = require('../Model/SlideBase');
import EnumsModule = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

module Slides {
    export class SlideTitleWithText extends SlideBase.SlideBase
    {
        content: string;
        slideType: EnumsModule.SlideType;

        constructor(title: string, content: string)
        {
            this.slideType = EnumsModule.SlideType.TitleWithText;
            this.content = content;
            super(this.slideType, title);
        }
    }
}

export = Slides;