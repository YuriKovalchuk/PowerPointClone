///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');
import StageSlideTitleWithText = require('../components/stageSlideTitleWithText');

class Stage extends React.Component<any, any, any>
{
    render() {

        return React.jsx(`
            <div className="row panel">
                <div className="stage">
                    <StageSlideTitleWithText />
                </div>
            </div>
         `);
    }
}

export = Stage;