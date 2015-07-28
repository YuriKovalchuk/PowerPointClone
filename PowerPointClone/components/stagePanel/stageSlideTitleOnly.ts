///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');


module StageSlideTitleOnly {

    export class StageSlideTitleOnly extends React.Component<any, any, any>
    {
        render() {
            return React.jsx(`
                <div className="col-xs-12">
                    <form>
                      <div className="form-group space-top300">
                        <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" />
                      </div>
                    </form>
                </div>
            `);
        }
    }
}

export = StageSlideTitleOnly;