///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');


import SlideBase = require('../components/slideBase');
import Stage = require('../components/stage');

import LeftPanel = require('../components/leftSidePanel/LeftPanel');


import RightSidePanel = require('../components/rightSidePanel');




class Main extends React.Component<any, any, any>
{
    state = {
        content : ''
    }
    
    changeLayoutClickHandler(slideType) {
        this.setState({ content: slideType });
    }

    changeStageClickHandler(id: string) {
        this.setState({ content: 'Changing the state ' + id });
    }

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
                    <LeftPanel.LeftPanel slides={Data} changeStageClickHandler={this.changeStageClickHandler.bind(this)} />
                </div>
            </div>
            <div className="col-lg-8 main-body">
                <Stage name={this.state.content} />
            </div>
            <div className="col-lg-2">
                <RightSidePanel changeLayoutClick={this.changeLayoutClickHandler.bind(this)} />
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
    { id: '4', title: 'Test4' },
    { id: '5', title: 'Test5' },
    { id: '6', title: 'Test6' },
    { id: '7', title: 'Test7' },
    { id: '8', title: 'Test8' }
]; 

export = Main;