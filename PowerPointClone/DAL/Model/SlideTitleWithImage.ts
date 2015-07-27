import ISlideBase = require('ISlideBase');
import SlideType = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

class SlideTitleWithImage implements ISlideBase {
    imagePath: string;
    slideType: SlideType;
    id: string;
    title: string;
    presentationId: string;

    constructor(
        title: string,
        presentationId: string,
        imagePath: string) {

        this.slideType = SlideType.TitleWithImage;
        this.id = Utils.GetId();
        this.title = title;
        this.presentationId = presentationId;
        this.imagePath = imagePath;
    }
}

export = SlideTitleWithImage;