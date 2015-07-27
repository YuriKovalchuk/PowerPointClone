///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');


import SlideBase = require('../components/slideBase');
import Stage = require('../components/stage');
import LeftPanel = require('../components/leftSidePanel');



class Main extends React.Component<any, any, any>
{
    render() {
        return React.jsx(`
<div>	
	<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Powerpoint Clone</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">Menu Item 1</a>
                    </li>
                    <li>
                        <a href="#">Menu Item 2</a>
                    </li>
                    <li>
                        <a href="#">Menu Item 3</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div id="leftSideMenuWrapper">
                    <LeftPanel slides={Data} />
                </div>
            </div>
            <div className="col-lg-8 main-body">
                <Stage />
            </div>
            <div className="col-lg-2">
                right panel
            </div>
        </div>
    </div>
</div>
         `);
    }
}

var Data = [
    { id: '1', title: 'Test1' },
    { id: '2', title: 'Test2' },
    { id: '3', title: 'Test3' },
    { id: '4', title: 'Test4' }
]; 

export = Main;