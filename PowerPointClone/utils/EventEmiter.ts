import _ = require('underscore');
import Backbone = require('backbone');

module Events {
    export class EventEmiter {
        constructor() {
            _.extend(this, Backbone.Events);
        }

        on(eventName: string, callback?: Function, context?: any): any { return null; }
        off(eventName?: string, callback?: Function, context?: any): any { return null; }
        trigger(eventName: string, ...args: any[]): any { return null; }
        bind(eventName: string, callback: Function, context?: any): any { return null; }
        unbind(eventName?: string, callback?: Function, context?: any): any { return null; }

        once(events: string, callback: Function, context?: any): any { return null; }
        listenTo(object: any, events: string, callback: Function): any { return null; }
        listenToOnce(object: any, events: string, callback: Function): any { return null; }
        stopListening(object?: any, events?: string, callback?: Function): any { return null; }
    }
}

export = Events