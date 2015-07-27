import IModel = require('IModel');
import ISlideBase = require('ISlideBase');


class Presentation implements IModel {
    id: string;
    slides: ISlideBase[];
}

export = Presentation;