import Slide = require('../Model/SlideBase');
import EnumsModule = require('../../Enums/SlideType');

module Slides {

    export class SlideTitleWithImage extends Slide.SlideBase {
        imagePath: string;
        slideType: EnumsModule.SlideType;

        constructor(
            title: string,
            imagePath: string) {
            this.slideType = EnumsModule.SlideType.TitleWithImage;
            this.imagePath = imagePath;

            super(this.slideType, title);
        }
    }
}

export = Slides;