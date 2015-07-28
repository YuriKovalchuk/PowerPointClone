///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

import UpperMenuModule = require('../components/upperMenu');
import SlideBase = require('../components/slideBases');
import StageModule = require('../components/stagePanel/stage');
import LeftPanelModule = require('../components/leftSidePanel/LeftPanel');
import RightSidePanelModule = require('../components/rightSidePanel');

import UpperMenu = UpperMenuModule.UpperMenu;
import Stage = StageModule.Stage;
import LeftPanel = LeftPanelModule.LeftPanel;
import RightSidePanel = RightSidePanelModule.RightSidePanel;


module Main {

    export class Main extends React.Component<any, any, any>
    {

        state = {
            changedSlideType: '',
            content: ''
        }

        changeLayoutClickHandler(slideType) {
            this.setState({ changedSlideType: slideType });
        }

        changeStageContentHandler(slideId: string) {
            console.log('Changing the state ' + slideId);
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
                                    <LeftPanel slides={Data} changeStageClickHandler={this.changeStageContentHandler.bind(this)} />
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