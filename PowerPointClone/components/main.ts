///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

import UpperMenu = require('../components/upperMenu');
import SlideBase = require('../components/slideBases');
import Stage = require('../components/stage');
import LeftPanel = require('../components/leftSidePanel/LeftPanel');
import RightSidePanel = require('../components/rightSidePanel');


class Main extends React.Component<any, any, any>
{

    state = {
        changedSlideType: '',
        content: ''
    }
    
    changeLayoutClickHandler(slideType) {
        this.setState({ changedSlideType: slideType });
    }

    changeStageContentHandler(slideId: string) {
        console.log('Changing the state ' + slideId );
        this.setState({ content: 'Changing the state ' + slideId });
    }

    render() {
        return React.jsx(`
<div>	
    <UpperMenu />
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <div id="leftSideMenuWrapper">
                    <LeftPanel.LeftPanel slides={Data} changeStageClickHandler={this.changeStageContentHandler.bind(this)} />
                </div>
            </div>
            <div className="col-md-8 main-body">
                <Stage changedSlideType={this.state.changedSlideType} />
            </div>
            <div className="col-md-2">
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