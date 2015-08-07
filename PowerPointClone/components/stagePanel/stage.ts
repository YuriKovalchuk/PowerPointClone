///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');

import EnumsModule = require('../../Enums/EventNames');
import SlideTypeModule = require('../../Enums/SlideType');
import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');
import EmiterWrapperModule = require('../../Utils/EmitterWrapper');
import LoaderModule = require('../Loader');

import Slide = SlideModule.Slide;
import EmitterWrapper = EmiterWrapperModule.EmitterWrapper;
import EventNames = EnumsModule.EventNames;
import Loader = LoaderModule.Loader;

module Stage {

    export interface StageProps {
    } 

    export interface StageState {
        slideId?: string,
        hasLoaded?: boolean,
        title?: string,
        text?: string,
        imageUrl?: string,
        slideType?: SlideTypeModule.SlideType,
    }
    
    export class Stage extends React.Component<StageProps, StageState, any>
    {
        //#region Properties
        state = {
            slideId: '',
            hasLoaded: false,
            title: '',
            text: '',
            imageUrl:  'https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=1200&h=1200',
            slideType: SlideTypeModule.SlideType.TitleOnly,

        }
        //#endregion Properties
        
        //#region React Lifecycle Methods
        public componentWillMount(): void {
            this.state.hasLoaded = false;
          
            EmitterWrapper.Emitter.on(EventNames.LeftSidePanelItemSelected, (slide: Slide) => this.OnLeftSidePanelItemSelected(slide), this);
            EmitterWrapper.Emitter.on(EventNames.RightSidePanelClick, (slideType: SlideTypeModule.SlideType) => this.OnRightSidePanelItemSelected(slideType), this);

        }

        public componentDidMount() {

            //TODO listen for events
            //1) events from LSP
            //2) events from RSP
        }
        //#endregion React Lifecycle Methods
        
        //#region EventHandlers
        private OnSaveSlideLocalEventHandler() {

            var slide: Slide = new Slide();
            var self = this;
            slide.fetch(
            {
                url: 'http://localhost:53840/api/slides/' + this.state.slideId,
                error: function (err)
                {
                    console.log('error ' + err)
                },
                success: function ()
                {
                    slide.set('Title', self.state.title);
                    slide.set('SlideType', self.state.slideType);
                    switch (self.state.slideType)
                    {
                        case SlideTypeModule.SlideType.TitleOnly:
                            break;
                        case SlideTypeModule.SlideType.TitleWithImage:
                            slide.set('ImageUrl', self.state.imageUrl);
                            break;
                        case SlideTypeModule.SlideType.TitleWithText:
                            slide.set('Content', self.state.text);
                            break;
                        default:
                            throw Error("IndexOutOfRange");
                    }
                    
                    slide.save({}, {
                        success: function () {
                            EmitterWrapper.Emitter.trigger(EventNames.StageSave, slide);
                        }
                    });
                }
            });
        }

        private OnCancelSaveLocalEventHandler() {
            console.log('cancel click');
        }

        private OnLeftSidePanelItemSelected(slide: Slide) {

            this.setState({
                hasLoaded: true,
                slideId: slide.get('Id'),
                text: slide.get('Content'),
                imageUrl: slide.get('ImageUrl'),
                title: slide.get('Title'),
                slideType: slide.get('SlideType')
            });

        }

        private OnRightSidePanelItemSelected(slideType: SlideTypeModule.SlideType) {

            this.setState({
                slideType: slideType
            });
        }

        private OnTitleChange(event) 
        {
            var newTitle: string = event.target.value;
            this.setState({
                title: newTitle
            });
        }
        private OnTextChange(event)
        {
            var newText: string = event.target.value;
            this.setState({
                text: newText
            });
        }

        //#endregion EventHandlers
        
        public render() {
            
            if (this.state.hasLoaded == false)
            {
                return React.jsx(`
                        <div className="row panel stage" id="stageWrapper">
                            <Loader />
                        </div>
                `);
            }
            else
            {
                var imageUrl = this.state.imageUrl.length > 0 ? this.state.imageUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=1200&h=1200';

                return React.jsx(`
                    <div className="row panel" id="stageWrapper">
                        <div id="stageMenu" className="stageMenu pull-right">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a onClick={this.OnSaveSlideLocalEventHandler.bind(this)}>
                                        <i className="fa fa-floppy-o fa-lg"></i>&nbsp;Save
                                    </a>
                                </li>
                                <li>
                                    <a onClick={this.OnCancelSaveLocalEventHandler.bind(this)}>
                                        <i className="fa fa-ban fa-lg"></i>&nbsp;Cancel
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="stage">
                            <div className="col-xs-12">
                                <form>
                                      <div className={"form-group space-top55 stage-element title-wrapper " +  SlideTypeModule.SlideType[this.state.slideType]}>
                                        <input type="text" 
                                               className="form-control title-input"
                                               id="title-content" 
                                               placeholder="Click to add Title" 
                                               value={this.state.title}
                                               onChange={this.OnTitleChange.bind(this)} />
                                      </div>
                                      <div className={"form-group space-top55 stage-element content-wrapper " +  SlideTypeModule.SlideType[this.state.slideType]}>
                                        <textarea className="form-control body-input" 
                                                  id="body-content" 
                                                  placeholder="Click to Content" 
                                                  value={this.state.text}
                                                  onChange={this.OnTextChange.bind(this)}
                                                  ></textarea>
                                      </div>
                                      <div className={"form-group space-top55 stage-element img-wrapper " +  SlideTypeModule.SlideType[this.state.slideType]}>
                                          <img src={imageUrl} title="Image" className="stage-image" />
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