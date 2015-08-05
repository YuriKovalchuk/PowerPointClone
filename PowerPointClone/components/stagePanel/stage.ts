///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

import EnumsModule = require('../../Enums/EventNames');
import SingletonModule = require('../../DAL/RepositoryManager');

import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');
import EmiterWrapperModule = require('../../utils/EmitterWrapper');

import Slide = SlideModule.Slide;
import EmitterWrapper = EmiterWrapperModule.EmitterWrapper;
import EventNames = EnumsModule.EventNames;

module Stage {

    export interface StageProps {
    } 

    export interface StageState {
        slide: Slide,
        hasLoaded : boolean
    }
    
    export class Stage extends React.Component<StageProps, StageState, any>
    {
        state = {
            slide : null,
            hasLoaded : false            
        }
        
        componentWillMount(): void
        {
            this.state.hasLoaded = false;
        }
        
        onSaveSlideLocalEventHandler() {
            console.log('save click');
            EmitterWrapper.Emitter.trigger('');
        }
        onCancelSaveLocalEventHandler() {
            console.log('cancel click');
        }

        componentDidMount() {

            //TODO listen for events
            //1) events from LSP
            //2) events from RSP

            EmitterWrapper.Emitter.on('', function (slide: Slide) {
                console.log('');
            });
        }


        render() {

            if (true) {
                return React.jsx(`
                        <div className="row panel stage" id="stageWrapper">
	                        <div>
		                        <div className="windows8 center-block">
			                        <div className="wBall" id="wBall_1">
				                        <div className="wInnerBall"></div>
			                        </div>
			                        <div className="wBall" id="wBall_2">
				                        <div className="wInnerBall"></div>
			                        </div>
			                        <div className="wBall" id="wBall_3">
				                        <div className="wInnerBall"></div>
			                        </div>
			                        <div className="wBall" id="wBall_4">
				                        <div className="wInnerBall"></div>
			                        </div>
			                        <div className="wBall" id="wBall_5">
				                        <div className="wInnerBall"></div>
			                        </div>
		                        </div>
	                        </div>
                        </div>
                `);
            }
            else {
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
                            <div className="col-xs-12">
                                <form>
                                      <div className="form-group space-top55">
                                        <input type="email" className="form-control title-input" id="title-content" placeholder="Click to add Title" value="" />
                                      </div>
                                      <div className="form-group space-top55">
                                        <textarea className="form-control body-input" id="body-content" placeholder="Click to Content" value=""></textarea>
                                      </div>
                                      <div className="form-group space-top55">
                                          <img src="http://placekitten.com/1200/1200" title="Image" className="stage-image" />
                                      </div>
                                </form>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    }
}

export = Stage;