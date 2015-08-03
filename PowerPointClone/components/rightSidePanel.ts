///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');
import LayoutsModule = require('../DAL/Model/Backbone.Models/LayoutsCollection');

import LayoutsCollection = LayoutsModule.LayoutsCollection;

module RightSidePanel {

    interface RightSidePanelState {
        LayoutsList: LayoutsCollection
    }
    
    export class RightSidePanel extends React.Component<any, RightSidePanelState, any>
    {
        public componentWillMount(): void
        {
            var self = this;
            var collection = new LayoutsCollection();
            collection.url = 'http://localhost:53840/api/layouts/';

            collection.fetch({
                success: function (response) {
                    console.log(response);
                    self.setState({
                        LayoutsList: response
                    });
                }
            });
        }
        
        public changeLayoutClickHandler(slideType): void {
            this.props.changeLayoutClick(slideType);
        }

        render() {

            var innerComponent: React.ReactElement<any>;


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
                
                innerComponent = React.jsx(`
                    <div>
					    <div className="row">
                            <div className="col-xs-12">
                                <div className="slide-base center-block space-top100 space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,0)}>
                                    <div className="title-placeholder center-block space-top55"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,2)}>
                                    <div className="title-placeholder center-block space-top10"></div>
                                    <div className="text-body-placeholder center-block space-top10"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,1)}>
                                    <div className="title-placeholder center-block space-top10"></div>
                                    <div className="text-body-placeholder center-block space-top10">
                                        <img src="http://placekitten.com/g/150/80" title="Image" className="right-side-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);;
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