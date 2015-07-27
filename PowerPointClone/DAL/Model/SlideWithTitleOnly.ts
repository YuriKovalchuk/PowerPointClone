import SlideBase = require('SlideBase');
import SlideType = require('../../Enums/SlideType');

class SlideWithTitleOnly extends SlideBase {

    constructor(
        presentationId: string,
        title: string) {

        super(
            SlideType.TitleOnly,
            title,
            presentationId);
    }
}

export = SlideWithTitleOnly;