import IModel = require('IModel');
import ISlideBase = require('ISlideBase');
import Utils = require('../../utils/Helpers');

module PresentationModel {
    export class Presentation implements IModel {
        private _id: string;
        get id(): string {
            return this._id;
        }

        slides: ISlideBase[];
        constructor() {
            this._id = 'presentation-' + Utils.GetId();
            console.log(this._id);
        }
    }
}

export = PresentationModel;