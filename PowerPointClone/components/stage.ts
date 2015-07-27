///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class Stage extends React.Component<any, any, any>
{
    render() {

        var divStyle = {
            height: '700px',
            border: '1px solid #ccc'
        }

        return React.jsx(`
            <div className="row panel">
                <div className="stage">
                    	            {this.props.name}
                </div>
            </div>
         `);
    }
}

export = Stage;