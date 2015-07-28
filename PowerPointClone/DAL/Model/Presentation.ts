import IModel = require('IModel');
import SlideBase = require('SlideBase');
import Utils = require('../../utils/Helpers');

module PresentationModel {
    export class Presentation implements IModel {
        //private
        id: string;
        //get id(): string {
        //    return this._id;
        //}

        slides: SlideBase.SlideBase[] = [];
        constructor() {
            this.id = 'presentation-' + Utils.GetId();
        }
    }
}

export = PresentationModel;