/// <reference path="../../../lib/_references.d.ts" />

import Backbone = require('backbone');
import Type = require('../../../Enums/SlideType');
import HelpersModule = require('../../../Utils/Helpers');
import repoistory = require('../../RepositoryManager');

import Helper = HelpersModule.Helpers;

module Models {
    export class Slide extends Backbone.Model {
        public Id: string;
        public SlideType: Type.SlideType;
        public Title: string;
        public Content: string;
        public ImageUrl: string;

        public Selected: boolean;

        public idAttribute: string = 'Id';
        public urlRoot: string = 'http://localhost:53840/api/slides';
        
        public defaults(): any {
            return {
                SlideType: Type.SlideType.TitleOnly,
                Title: '' ,
                Content: '',
                ImageUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=1200&h=1200',
                Selected: false,
            }
        }
    }
}

export = Models;
