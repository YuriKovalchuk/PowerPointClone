import ISlideBase = require('ISlideBase');
import SlideType = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

class SlideTitleWithText implements ISlideBase {
    content: string;
    slideType: SlideType;
    id: string;
    title: string;
    presentationId: string;

    constructor(
        title: string,
        presentationId: string,
        content: string) {

        this.slideType = SlideType.TitleWithText;
        this.id = Utils.GetId();
        this.title = title;
        this.presentationId = presentationId;
        this.content = content;
    }
}