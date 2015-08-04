///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');
import LayoutsModule = require('../DAL/Model/Backbone.Models/LayoutsCollection');
import LayoutModule = require('../DAL/Model/Backbone.Models/Layout');
import EmiterModule = require('../utils/EventEmiter');
import EnumsModule = require('../Enums/EventNames');


import LayoutsCollection = LayoutsModule.LayoutsCollection;
import Layout = LayoutModule.Layout;
import Emitter = EmiterModule.EventEmiter;
import EventNamesEnum = EnumsModule.EventNames;

module RightSidePanel {

    interface RightSidePanelState {
        LayoutsList: LayoutsCollection
    }
    
    export class RightSidePanel extends React.Component<any, RightSidePanelState, any>
    {
        public static Emitter: Emitter = new Emitter();

        public componentWillMount(): void
        {
            var self = this;
            var collection = new LayoutsCollection();
            collection.url = 'http://localhost:53840/api/layouts/';

            collection.fetch({
                success: function (response) {
                    self.setState({
                        LayoutsList: response
                    });
                }
            });
        }
        
        public changeLayoutClickHandler(slideType): void {
            RightSidePanel.Emitter.trigger(EventNamesEnum.RightSidePanelClick, slideType);
        }
        
        render() {

            var innerComponent: React.ReactElement<any>;
            var row: React.ReactElement<any>;
            var rows: React.ReactElement<any>[] = [];
            var hasText: boolean = false;
            var hideImageClass: string = "";
            var hideTextClass: string = "";
            var centerTitleClass: string = "";
            var isFirstSlideClass: string = "";

            if (this.state == null)
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
                    
                    hideImageClass = current.get('HasImage') == true ? 'text-body-placeholder center-block space-top10' : ' text-body-placeholder center-block space-top10 hidden';
                    hideTextClass = current.get('HasText') == true ? 'text-body-placeholder center-block space-top10' : 'text-body-placeholder center-block space-top10 hidden';
                    centerTitleClass = (current.get('HasText') == false) && (current.get('HasImage') == false) ? centerTitleClass = 'title-placeholder center-block space-top55' : 'title-placeholder center-block space-top10';

                    row = React.jsx(`
                                <div className="col-xs-12">
                                    <div className={isFirstSlideClass} onClick={this.changeLayoutClickHandler.bind(this,{i})}>
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