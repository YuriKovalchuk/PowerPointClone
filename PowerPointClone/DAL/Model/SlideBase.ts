import SlideType = require('../../Enums/SlideType');
import IModel = require('IModel');

class SlideBase implements IModel{
    slideType: SlideType;
    id: string;
    title: string;

    presentationId: string;

    constructor(
        slideType: SlideType,
        title: string,
        presentationId: string) {

        this.slideType = slideType;
        this.id = this.GetId();
        this.title = title;
        this.presentationId = presentationId;
    }

    private GetId(): string {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }
}

export = SlideBase;