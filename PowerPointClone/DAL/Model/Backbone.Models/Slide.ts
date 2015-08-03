/// <reference path="../../../lib/_references.d.ts" />

import Backbone = require('backbone');
import Type = require('../../../Enums/SlideType');
import Utils = require('../../../Utils/Helpers');
import repoistory = require('../../RepositoryManager');

module Models {
    export class Slide extends Backbone.Model {
        public Id: string;
        public SlideType: Type.SlideType;
        public Title: string;
        public Content: string;
        public ImageUrl: string;
    }
}

export = Models;
