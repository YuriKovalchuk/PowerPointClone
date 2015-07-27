import SlideBase = require('SlideBase');
import SlideType = require('../../Enums/SlideType');

class SlideTitleWithImage extends SlideBase {
    imagePath: string;

    slideType: SlideType = SlideType.TitleWithImage;
}

export = SlideTitleWithImage;