///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import StageSlideTitleWithTextModule = require('../stagePanel/stageSlideTitleWithText');
import StageSlideTitleOnlyModule = require('../stagePanel/stageSlideTitleOnly');
import StageSlideTitleWithImageModule = require('../stagePanel/stageSlideTitleWithImage');

import StageSlideTitleWithText = StageSlideTitleWithTextModule.StageSlideTitleWithText;
import StageSlideTitleOnly = StageSlideTitleOnlyModule.StageSlideTitleOnly;
import StageSlideTitleWithImage = StageSlideTitleWithImageModule.StageSlideTitleWithImage;

module Stage {

    export interface StageState {
        showMenuItems:boolean
    }
    
    export class Stage extends React.Component<any, StageState, any>
    {   
        componentWillMount() : void {
            this.setState({ showMenuItems: false });
        };

        onMouseMoveLocalEventHandler(entering: boolean): void {
            this.setState({ showMenuItems: entering });
        }
        
        onSaveSlideLocalEventHandler() {
            console.log('save click');
        }
        onCancelSaveLocalEventHandler() {
            console.log('cancel click');
        }

        render() {

            var stageSlideValue;
            var slideType = this.props.changedSlideType;

            switch (slideType) {
                case 'TitleOnly':
                    stageSlideValue = React.jsx(`<StageSlideTitleOnly />`);
                    break;
                case 'TitleWithImage':
                    stageSlideValue = React.jsx(`<StageSlideTitleWithImage />`);
                    break;
                case 'TitleWithText':
                    stageSlideValue = React.jsx(`<StageSlideTitleWithText />`);
                    break;
                default:
                    stageSlideValue = React.jsx(`<StageSlideTitleOnly />`);
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