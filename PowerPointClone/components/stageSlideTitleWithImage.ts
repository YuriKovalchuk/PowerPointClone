///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class StageSlideTitleWithImage extends React.Component<any, any, any>
{
    render() {

        var imageStyling = {
            height: "480px",
            position: "relative",
            left: "0px"
        }


        return React.jsx(`
            <div className="col-xs-12">
                <form>
                  <div className="form-group space-top55">
                    <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" />
                  </div>
                  <div className="form-group space-top55">
                      <img src="http://placekitten.com/1200/1200" title="Image" style={imageStyling} />
                  </div>
                </form>
            </div>
         `);
    }
}

export = StageSlideTitleWithImage;