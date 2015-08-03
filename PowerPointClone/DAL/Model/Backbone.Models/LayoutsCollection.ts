import Backbone = require('backbone');
import EnumsModel = require('../../../Enums/SlideType');
import Utils = require('../../../utils/Helpers');
import Layout = require('../Backbone.Models/Layout');

module BackboneModels {
    export class LayoutsCollection extends Backbone.Collection<Layout.Layout> {
    }
}

export = BackboneModels;