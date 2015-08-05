import _ = require('underscore');
import Backbone = require('backbone');

import EmiterModule = require('../utils/EventEmiter');

import Emitter = EmiterModule.EventEmiter;


module Wrapper {

    export class EmitterWrapper {
        public static Emitter:Emitter = new Emitter();
    }
}

export = Wrapper;