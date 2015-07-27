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
            <div className="row" style={divStyle}>
	            {this.props.name}
            </div>
         `);
    }
}

export = Stage;