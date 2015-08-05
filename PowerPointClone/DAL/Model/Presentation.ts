import IModel = require('IModel');
import SlideBase = require('SlideBase');
import HelpersModule = require('../../utils/Helpers');

import Helper = HelpersModule.Helpers;

module PresentationModel {
    export class Presentation implements IModel {
        //private
        id: string;
        //get id(): string {
        //    return this._id;
        //}

        slides: SlideBase.SlideBase[] = [];
        constructor() {
            this.id = 'presentation-' + Helper.GetId();
        }
    }
}

export = PresentationModel;