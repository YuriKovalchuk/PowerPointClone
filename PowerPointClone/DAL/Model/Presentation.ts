import IModel = require('IModel');
import SlideBase = require('SlideBase');


class Presentation implements IModel {
    id: string;
    slides: SlideBase[];
}

export = Presentation;