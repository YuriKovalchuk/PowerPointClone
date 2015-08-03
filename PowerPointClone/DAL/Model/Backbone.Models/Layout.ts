/// <reference path="../../../lib/_references.d.ts" />

import Backbone = require('backbone');
import Type = require('../../../Enums/SlideType');
import Utils = require('../../../Utils/Helpers');
import repoistory = require('../../RepositoryManager');


module Models {
    export class Layout extends Backbone.Model {
        SlideLayoutTypeId: number;
        Name: string;
    }
}

export = Models;