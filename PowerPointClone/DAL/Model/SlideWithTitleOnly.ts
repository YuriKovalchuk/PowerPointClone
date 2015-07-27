import ISlideBase = require('ISlideBase');
import SlideType = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

class SlideWithTitleOnly implements ISlideBase {
    slideType: SlideType;
    id: string;
    title: string;
    presentationId: string;

    constructor(
        title: string,
        presentationId: string) {

        this.slideType = SlideType.TitleWithText;
        this.id = Utils.GetId();
        this.title = title;
        this.presentationId = presentationId;
    }
}

export = SlideWithTitleOnly;