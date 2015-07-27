import IModel = require('IModel');
import ISlideBase = require('SlideBase');
import SlideBase = ISlideBase.SlideBase;


class Presentation implements IModel {
    id: string;
    slides: SlideBase.ISlideBase[];
}

export = Presentation;