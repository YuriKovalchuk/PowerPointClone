///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

module Loader {
    export class Loader {

        render() {
            return React.jsx(`
                <div className='loader'>
                    <div className='ball_1' ></div>
                    <div className='ball_2' ></div>
                    <div className='ball_3' ></div>
                </div>
                `);
        };
    }
}

export = Loader;