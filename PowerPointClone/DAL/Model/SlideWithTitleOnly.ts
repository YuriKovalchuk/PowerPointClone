import ISlideBase = require('SlideBase');

import SlideBase = ISlideBase.SlideBase;

class SlideWithTitleOnly extends SlideBase.ISlideBase {

    slideType: SlideBase.SlideType = SlideBase.SlideType.TitleOnly;
}

export = SlideWithTitleOnly;