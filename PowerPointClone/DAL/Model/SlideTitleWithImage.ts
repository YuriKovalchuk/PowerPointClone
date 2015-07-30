import Slide = require('../Model/SlideBase');
import EnumsModule = require('../../Enums/SlideType');

module Slides {

    export class SlideTitleWithImage extends Slide.SlideBase {
        imagePath: string;
        slideType: EnumsModule.SlideType;
        id: string;

        constructor(
            id: string,
            title: string,
            imagePath: string) {
            this.slideType = EnumsModule.SlideType.TitleWithImage;
            this.imagePath = imagePath;
            this.id = id;
            super(this.slideType, title);
        }
    }
}

export = Slides;