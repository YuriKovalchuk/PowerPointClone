///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

import UpperMenuModule = require('../components/upperMenu');
import StageModule = require('../components/stagePanel/stage');
import LeftPanelModule = require('../components/leftSidePanel/LeftPanel');
import RightSidePanelModule = require('../components/rightSidePanel');
import SlideTitleWithImageModule = require('../DAL/Model/SlideTitleWithImage');
import SlideTitleWithTextModule = require('../DAL/Model/SlideTitleWithText');
import SlideWithTitleOnlyModule = require('../DAL/Model/SlideWithTitleOnly');
import SingletonModule = require('../DAL/RepositoryManager');

import UpperMenu = UpperMenuModule.UpperMenu;
import Stage = StageModule.Stage;
import LeftPanel = LeftPanelModule.LeftPanel;
import RightSidePanel = RightSidePanelModule.RightSidePanel;
import SlideTitleWithImage = SlideTitleWithImageModule.SlideTitleWithImage;
import SlideTitleWithText = SlideTitleWithTextModule.SlideTitleWithText;
import SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
import RepositoryManager = SingletonModule.RepositoryManager;


module Main {

    export class Main extends React.Component<any, any, any>
    {
        repository: RepositoryManager = RepositoryManager.GetInstance();

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

        private Seed(): void {

            this.repository.DeleteAllSlides();
            this.repository.AddSlide(new SlideWithTitleOnly('Test 1'));
            this.repository.AddSlide(new SlideTitleWithText('Test 2', 'Content Test'));
            this.repository.AddSlide(new SlideTitleWithImage('Test 3', 'Image Path Test'));
            this.repository.AddSlide(new SlideWithTitleOnly('Test 4'));
            this.repository.AddSlide(new SlideTitleWithText('Test 5', 'Content Test'));
            this.repository.AddSlide(new SlideTitleWithImage('Test 6', 'Image Path Test'));

        }

        render() {
            this.Seed();
            return React.jsx(`
                <div>
                    <UpperMenu />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div id="leftSideMenuWrapper">
                                    <LeftPanel changeStageClickHandler={this.changeStageContentHandler.bind(this)} />
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

export = Main;