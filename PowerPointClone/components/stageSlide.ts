///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');


interface ISlideProperties {
    slideType : string
}


class Stage extends React.Component<any, any, any>
{
    render() {
        return React.jsx(`
            <div className="col-xs-12">
                <form>
                  <div className="form-group space-top55">
                    <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" />
                  </div>
                  <div className="form-group space-top55">
                    <textarea className="form-control body-input" id="body-content" placeholder="Click to Content"></textarea>
                  </div>
                </form>
            </div>
         `);
    }
}

export = Stage;