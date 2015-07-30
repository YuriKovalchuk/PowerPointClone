/// <reference path="../../../lib/_references.d.ts" />

import Backbone = require('backbone');
import EnumsModel = require('../../../Enums/SlideType');
import RM = require('../../RepositoryManager');
import Slide = require('../SlideTitleWithImage');
import Utils = require('../../../utils/Helpers');

module BackboneModels {
    export class SlideTitleWithImageModel extends Backbone.Model {
        public id: string;
        public slideType: EnumsModel.SlideType;
        public title: string;
        public imagePath: string;

        private _repository = RM.RepositoryManager.GetInstance();

        public defaults(): any {
            this.id = Utils.GetId();
            this.slideType = EnumsModel.SlideType.TitleWithImage;
            this.title = '';
            this.imagePath = '';
        }
        
        public save(attributes?: any, options?: Backbone.ModelSaveOptions): any {
            var slide = new Slide.SlideTitleWithImage(this.id, this.title, this.imagePath);
            this._repository.UpdateSlide(slide);
        }
    }
}

export = BackboneModels;