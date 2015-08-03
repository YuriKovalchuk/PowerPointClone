import Backbone = require('backbone');
import EnumsModel = require('../../../Enums/SlideType');
import Utils = require('../../../utils/Helpers');
import Slide = require('../Backbone.Models/Slide');

module BackboneModels {
    export class SlideCollection extends Backbone.Collection<Slide.Slide> {
        
    }
}

export = BackboneModels;