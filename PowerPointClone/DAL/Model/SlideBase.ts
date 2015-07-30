import EnumsModule = require('../../Enums/SlideType');
import Utils = require('../../utils/Helpers');

module Slide {

    export class SlideBase {
        slideType: EnumsModule.SlideType;
        id: string;
        title: string;

        constructor(slideType: EnumsModule.SlideType, title: string) {
            this.slideType = slideType;
            this.id = Utils.GetId();
            this.title = title;
        }
    }
}
export = Slide;