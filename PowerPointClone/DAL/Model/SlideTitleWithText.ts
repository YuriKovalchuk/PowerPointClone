import ISlideBase = require('SlideBase');
import SlideType = require('../../Enums/SlideType');

class SlideTitleWithText extends ISlideBase {
    content: string;

    slideType: SlideType = SlideType.TitleWithText;
}

export = SlideTitleWithText;