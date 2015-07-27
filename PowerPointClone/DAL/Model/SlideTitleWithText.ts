import ISlideBase = require('SlideBase');

import SlideBase = ISlideBase.SlideBase;

class SlideTitleWithText extends SlideBase.ISlideBase {
    content: string;

    slideType: SlideBase.SlideType = SlideBase.SlideType.TitleWithText;
}

export = SlideTitleWithText;