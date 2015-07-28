///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

module StageSlideTitleWithImage {

    export class StageSlideTitleWithImage extends React.Component<any, any, any>
    {
        render() {
            return React.jsx(`
                <div className="col-xs-12">
                    <form>
                      <div className="form-group space-top55">
                        <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" />
                      </div>
                      <div className="form-group space-top55">
                          <img src="http://placekitten.com/1200/1200" title="Image" className="stage-image" />
                      </div>
                    </form>
                </div>
             `);
        }
    }
}

export = StageSlideTitleWithImage;