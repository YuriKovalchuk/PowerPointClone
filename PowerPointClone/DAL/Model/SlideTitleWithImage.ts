import ISlideBase = require('SlideBase');

import SlideBase = ISlideBase.SlideBase;

class SlideTitleWithImage extends SlideBase.ISlideBase {
    imagePath: string;

    slideType: SlideBase.SlideType = SlideBase.SlideType.TitleWithImage;
}

export = SlideTitleWithImage;