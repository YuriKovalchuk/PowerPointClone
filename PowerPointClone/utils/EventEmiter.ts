import _ = require('underscore');
import Backbone = require('backbone');

module Events {
    export class EventEmiter {
        constructor() {
            _.extend(this, Backbone.Events);
        }
    }
}

export = Events