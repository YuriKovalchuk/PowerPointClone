///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

module UpperMenu {

    export class UpperMenu extends React.Component<any, any, any>
    {
        startSlideShowLocalHandler() {
            console.log('start slideshow...');
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
                            <a className="navbar-brand">PowerPoint Clone</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a onClick={this.startSlideShowLocalHandler.bind(this)}>
                                        <i className="fa fa-slideshare"></i>&nbsp; Play Slideshow
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
             `);
        }
    }
}

export = UpperMenu;