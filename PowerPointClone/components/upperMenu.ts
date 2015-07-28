///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class UpperMenu extends React.Component<any, any, any>
{
    addNewSlideHandler() {
        console.log('add new slide');
    }
    
    render() {
        return React.jsx(`
	        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">PowerPoint Clone</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a onClick={this.addNewSlideHandler.bind(this)}>Add New Slide</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         `);
    }
}

export = UpperMenu;