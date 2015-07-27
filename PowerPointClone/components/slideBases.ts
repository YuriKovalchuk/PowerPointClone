///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class SlideBases extends React.Component<any, any, any>
{
    state = {
        name : "testAlex"
    }

    render() {
        return React.jsx(`
            <div>
	            {this.state.name}
            </div>
         `);
    }
}

export = SlideBases;