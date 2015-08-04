///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

import EnumsModule = require('../../Enums/EventNames');
import SingletonModule = require('../../DAL/RepositoryManager');


import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');
import EmiterModule = require('../../utils/EventEmiter');


import Slide = SlideModule.Slide;
import Emitter = EmiterModule.EventEmiter;
import EventNames = EnumsModule.EventNames;


module Stage {

    export interface StageProps {
    } 

    export interface StageState {
        slide: Slide
    }
    
    export class Stage extends React.Component<StageProps, StageState, any>
    {
        componentWillMount(): void
        {
           
        }
        
        onSaveSlideLocalEventHandler() {
            console.log('save click');
        }
        onCancelSaveLocalEventHandler() {
            console.log('cancel click');
        }

        render() {

            var stageSlideValue;
            
            var preloader: React.ReactElement<any>;
            preloader = React.jsx(`
                    <div>
                        <div>
                            <img src="photos/294.GIF" className="preloader space-top100" />
                        </div>
                    </div>
                `);
            

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

export = Stage;