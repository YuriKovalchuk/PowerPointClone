import SlideType = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

module Slide {

    export class SlideBase {
        slideType: SlideType;
        id: string;
        title: string;

        constructor(slideType: SlideType, title: string) {
            this.slideType = slideType;
            this.id = Utils.GetId();
            this.title = title;
        }
    }
}
export = Slide;