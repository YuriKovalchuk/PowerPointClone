import Slide = require('../Model/SlideBase');
import SlideType = require('../../Enums/SlideType');

module Slides {

    export class SlideTitleWithImage extends Slide.SlideBase {
        imagePath: string;
        slideType: SlideType;

        constructor(
            title: string,
            imagePath: string) {
            this.slideType = SlideType.TitleWithImage;
            this.imagePath = imagePath;

            super(this.slideType, title);
        }
    }
}

export = Slides;