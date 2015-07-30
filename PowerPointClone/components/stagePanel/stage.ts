///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

import StageSlideTitleWithTextModule = require('../stagePanel/stageSlideTitleWithText');
import StageSlideTitleOnlyModule = require('../stagePanel/stageSlideTitleOnly');
import StageSlideTitleWithImageModule = require('../stagePanel/stageSlideTitleWithImage');

import SlideBaseModule = require('../../DAL/Model/SlideBase');
import SlideWithTitleOnlyModule = require('../../DAL/Model/SlideWithTitleOnly');
import SlideWithTitleAndImageModule = require('../../DAL/Model/SlideTitleWithImage');
import SlideWithTitleAndTextModule = require('../../DAL/Model/SlideTitleWithText');

//#endregion NameSpaces

import EnumsModule = require('../../Enums/SlideType');
import SingletonModule = require('../../DAL/RepositoryManager');

//#region ViewModels
import StageSlideTitleWithText = StageSlideTitleWithTextModule.StageSlideTitleWithText;
import StageSlideTitleOnly = StageSlideTitleOnlyModule.StageSlideTitleOnly;
import StageSlideTitleWithImage = StageSlideTitleWithImageModule.StageSlideTitleWithImage;
//#endregion ViewModels

//#region Models
import SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
import SlideWithTitleAndImage = SlideWithTitleAndImageModule.SlideTitleWithImage;
import SlideWithTitleAndText = SlideWithTitleAndTextModule.SlideTitleWithText;
//#endregion Models

import RepositoryManager = SingletonModule.RepositoryManager;

module Stage {

    export interface StageProps {
        changedSlideType: number;
        changedSlideTypeId: EnumsModule.SlideType;
    } 

    export interface StageState {
        innerSlide: SlideBaseModule.SlideBase
    }
    
    export class Stage extends React.Component<StageProps, StageState, any>
    {
        componentWillMount(): void
        {
            var slideModel = new SlideWithTitleOnly("test 123 alex");
            //var slideModel = new SlideWithTitleAndText("test 123 alex","teasdaklsdl;ka lkdaslk djal skjdkla jslk djalks dlqkwjmd;laksdl; ak;sldk q;lwd,;alsdm, ;al,wl;q;l");

            this.setState({
                innerSlide: slideModel
            });
        }
        
        onSaveSlideLocalEventHandler() {
            console.log('save click');
        }
        onCancelSaveLocalEventHandler() {
            console.log('cancel click');
        }

        onInnerStageModelChanged(model: SlideBaseModule.SlideBase) {
            this.setState({
                innerSlide: model
            });
        }


        render() {

            var stageSlideValue;
            var slideType : number = this.props.changedSlideType;
            
            var f: () => void = this.onInnerStageModelChanged.bind(this, this.state.innerSlide);

            switch (slideType) {
                case 0:
                    stageSlideValue = React.jsx(`<StageSlideTitleOnly modelChangedBubbleUpHandler={f} slideModel={this.state.innerSlide} />`);
                    break;
                case 1:
                    stageSlideValue = React.jsx(`<StageSlideTitleWithImage modelChangedBubbleUpHandler={f} slideModel={this.state.innerSlide} />`);
                    break;
                case 2:
                    stageSlideValue = React.jsx(`<StageSlideTitleWithText modelChangedBubbleUpHandler={f} slideModel={this.state.innerSlide} />`);
                    break;
                default:
                    //stageSlideValue = React.jsx(`<StageSlideTitleOnly slideModel={this.state.innerSlide} />`);
                    //throw new Error("Invalid slide type!");
                    break;
            }

            return React.jsx(`
                <div className="row panel" id="stageWrapper">
                    <div id="stageMenu" className="stageMenu pull-right">
                        <ul className="nav navbar-nav">
                            <li>
                                <a onClick={this.onSaveSlideLocalEventHandler.bind(this)}>
                                    <i className="fa fa-floppy-o fa-lg"></i>&nbsp;Save
                                </a>
                            </li>
                            <li>
                                <a onClick={this.onCancelSaveLocalEventHandler.bind(this)}>
                                    <i className="fa fa-ban fa-lg"></i>&nbsp;Cancel
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="stage">
                        {stageSlideValue}
                    </div>
                </div>
            `);
        }
    }
}

export = Stage;