///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');
import LayoutsModule = require('../DAL/Model/Backbone.Models/LayoutsCollection');
import LayoutModule = require('../DAL/Model/Backbone.Models/Layout');
import EmiterModule = require('../Utils/EmitterWrapper');
import EnumsModule = require('../Enums/EventNames');
import SlideModule = require('../dal/model/backbone.models/slide');
import SlideTypeEnumModule = require('../Enums/SlideType');


import LayoutsCollection = LayoutsModule.LayoutsCollection;
import Layout = LayoutModule.Layout;
import Emitter = EmiterModule.EmitterWrapper;
import EventNamesEnum = EnumsModule.EventNames;
import Slide = SlideModule.Slide;
import SlideTypeEnum = SlideTypeEnumModule.SlideType;

module RightSidePanel {

    interface RightSidePanelState {
        hasLoaded?: boolean;
        LayoutsList?: LayoutsCollection;
        SelectedSlideType?: SlideTypeEnum;
    }
    
    export class RightSidePanel extends React.Component<any, RightSidePanelState, any>
    {
        state = {
            hasLoaded: false,
            LayoutsList: new LayoutsCollection(),
            SelectedSlideType: SlideTypeEnum.TitleOnly
        }

        //#region Private Properties
        private static Emitter: Emitter = new Emitter();
        //#endregion Private Properties
        
        //#region Component LifeCycle
        public componentWillMount(): void
        {
            Emitter.Emitter.on(EventNamesEnum.LeftSidePanelItemSelected, function (slide: Slide) {
                this.setState({
                    SelectedSlideType: slide.get('SlideType')
                })
            }, this);

            var self = this;
            var collection = new LayoutsCollection();
            collection.url = 'http://localhost:53840/api/layouts/';

            collection.fetch({
                success: function (response) {
                    self.setState({
                        LayoutsList: response,
                        hasLoaded: true
                    });
                }
            });
        }
        //#endregion Component LifeCycle
        
        //#region EventHandlers
        private OnChangeLayoutClickHandler(slideType: SlideTypeEnum): void {
            Emitter.Emitter.trigger(EventNamesEnum.RightSidePanelClick, slideType);
            this.setState({
                SelectedSlideType: slideType
            })
        }
        //#endregion EventHandlers
        
        public render() {

            var innerComponent: React.ReactElement<any>;
            var row: React.ReactElement<any>;
            var rows: React.ReactElement<any>[] = [];
            var hasText: boolean = false;
            var hideImageClass: string = "";
            var hideTextClass: string = "";
            var centerTitleClass: string = "";
            var isFirstSlideClass: string = "";
            var isSelected: boolean = false;

            if (!this.state.hasLoaded)
            {
                innerComponent = React.jsx(`
                    <div>
                        <div>
                            <img src="photos/294.GIF" className="preloader space-top100" />
                        </div>
                    </div>
                `);
            }
            else {
                
                for (var i = 0; i < this.state.LayoutsList.models.length; i++) {
                    var current: Layout = this.state.LayoutsList.models[i];

                    isFirstSlideClass = i == 0 ? 'slide-base center-block space-top100 space-bottom20' : 'slide-base center-block space-bottom20';
                    isFirstSlideClass = current.get('SlideLayoutTypeId') == this.state.SelectedSlideType ? isFirstSlideClass + ' selected' : isFirstSlideClass; 

                    hideImageClass = current.get('HasImage') == true ? 'text-body-placeholder center-block space-top10' : ' text-body-placeholder center-block space-top10 hidden';
                    hideTextClass = current.get('HasText') == true ? 'text-body-placeholder center-block space-top10' : 'text-body-placeholder center-block space-top10 hidden';
                    centerTitleClass = (current.get('HasText') == false) && (current.get('HasImage') == false) ? centerTitleClass = 'title-placeholder center-block space-top55' : 'title-placeholder center-block space-top10';

                    row = React.jsx(`
                                <div className="col-xs-12">
                                    <div className={isFirstSlideClass} onClick={this.OnChangeLayoutClickHandler.bind(this,i)}>
                                        <div className={centerTitleClass}></div>
                                        <div className={hideTextClass}></div>
                                        <div className={hideImageClass}>
                                            <img src="http://placekitten.com/g/150/80" title="Image" className="right-side-image" />
                                        </div>
                                    </div>
                                </div>
                        `);
                    rows.push(row);
                }
                
                innerComponent = React.jsx(`
                    <div>
                          {rows}
                    </div>
                `);
            }

            return React.jsx(`
                <div className="panel height700">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="header">
                                Layouts
                            </div>
                        </div>
                    </div>
                    {innerComponent}
                </div>
            `);
        }
    }
}

export = RightSidePanel;