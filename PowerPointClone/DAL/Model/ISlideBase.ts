import SlideType = require('../../Enums/SlideType');

interface ISlideBase {
    slideType: SlideType;
    id: string;
    title: string;
    presentationId: string;
}

export = ISlideBase;