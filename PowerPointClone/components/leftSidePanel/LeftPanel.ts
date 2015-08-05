///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelRowModule = require('../leftSidePanel/PanelRow');
import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');
import SlideCollectionModule = require('../../DAL/Model/Backbone.Models/SlideCollection');
import EmitterModule = require('../../Utils/EventEmiter');

import PanelRow = PanelRowModule.PanelRow;
import Slide = SlideModule.Slide;
import SlideCollection = SlideCollectionModule.SlideCollection;
import EventEmitter = EmitterModule.EventEmiter;


module LeftPanel {

    interface IProps {
        
    }

    interface IState {
        deleted?: boolean
        hasData?: boolean
        model?: SlideCollection
    }

    export class LeftPanel extends React.Component<IProps, IState, any>
    {
        public static Emitter: EventEmitter = new EventEmitter();

        state = {
            deleted: false,
            hasData: false,
            model: new SlideCollection()
        }

        clicked: boolean = false;

        selectedSlide: Slide = new Slide();

        slideCollection: SlideCollection = new SlideCollection();

        componentWillMount(): void {
            var self = this;

            this.slideCollection.fetch({
                url: "http://localhost:53840/api/slides",
                success: function () {
                    self.selectedSlide = self.slideCollection.at(0);
                    self.selectedSlide.set({
                        Selected: true
                    })
                }
            });
        }

        componentDidMount(): void {
            this.slideCollection.on("sync", function () {

                this.setState({
                    hasData: true,
                    model : this.slideCollection
                });
            }, this)
        }

        componentDidUpdate(): void {
            if (this.clicked) {
                this.scrollDown();
                this.clicked = false;
            }
        }

        scrollDown(): void {
            var panel = document.getElementById('leftSidePanel');
            panel.scrollTop = panel.scrollHeight;
        }

        clickAddSlide(): void {
            var newSlide = new Slide();

            this.slideCollection.create(newSlide, { url: "http://localhost:53840/api/slides" });

            this.selectedSlide = this.slideCollection.at(this.slideCollection.length - 1);
            this.selectedSlide.set({
                Selected: true
            })

            this.setState({
                model: this.slideCollection
            })
            //TODO raise event
            //LeftPanel.Emitter.trigger('xxx', newSlide);
            this.clicked = true;
        }

        clickDeleteSlide(id: string): void {
            console.log('Delete button clicked ( left panel )');

            var slideCollection = new SlideCollection();
            var currentSlide = new Slide();
            var self: LeftPanel = this;

            slideCollection = this.state.model;

            currentSlide.fetch({
                url: 'http://localhost:53840/api/slides/' + id,
                error: function (err) {
                    console.log('error ' + err)
                },
                success: function (data) {
                    console.log('succes');
                    
                    currentSlide.destroy({
                        url: 'http://localhost:53840/api/slides/' + id,
                        success: function (data) {
                            console.log('succes destroy');
                            
                            currentSlide = slideCollection.findWhere({ Id: id });

                            if (currentSlide.get('Selected')) {

                                if (slideCollection.indexOf(currentSlide) !== slideCollection.length - 1) {
                                    self.selectedSlide = slideCollection.at(slideCollection.indexOf(currentSlide) + 1);
                                }
                                else {
                                    self.selectedSlide = slideCollection.at(slideCollection.indexOf(currentSlide) - 1);
                                }

                                self.selectedSlide.set({
                                    Selected: true
                                })
                            }

                            slideCollection.remove(currentSlide);

                            self.setState({
                                model: slideCollection,
                            });

                        },
                        error: function (err) {
                            console.log('error destroy ' + err); 
                        }
                    })
                }
            });
        }

        handleSelectSlide(id: string): void {
            console.log('Handling select slide in Left Panel');

            this.selectedSlide = this.slideCollection.findWhere({ Id: id });
            this.selectedSlide.set({
                Selected: true
            });

            this.setState({
                model: this.slideCollection
            })

        }

        resetSelectedAttribute(slide: Slide): Slide {
            if (slide.get('Id') != this.selectedSlide.get('Id') && slide.get('Selected') === true) {
                slide.set({ Selected: false });
            }
            return slide;
        }


        render() {
            console.log('Rendering left panel...');

            var self = this;
            var data = [];

            var h = this.handleSelectSlide.bind(this);

            this.state.model.forEach(function (s) {

                s = self.resetSelectedAttribute(s);
                    
                data.push(React.jsx(`
                    <PanelRow deleted={this.state.deleted} 
                        slide={s} 
                        index={this.state.model.indexOf(s)+1}  
                        clickDeleteUpdatePanel={this.clickDeleteSlide.bind(this, s.get('Id'))} 
                        handleSelectSlide={this.handleSelectSlide.bind(this)} />
                `));

            }, this);

            if (this.state.hasData) {
                return React.jsx(`
                    <div>
                        <div className='header' >
                            <div className='header left'> Slides </div>
                            <div className='header right' onClick={this.clickAddSlide.bind(this)}>
                                <i className="fa fa-plus-square fa-lg"></i>&nbsp;Add slide
                            </div>
                        </div>
                        <div id='leftSidePanel' className='leftSidePanel'>
                            {data}
                        </div>
                    </div>
                `);
            }

            else {
                return React.jsx(`
                    <div>
                        <div className='header' >
                            <div className='header left'> Slides </div>
                            <div className='header right' onClick={this.clickAddSlide.bind(this)}>
                                <i className="fa fa-plus-square fa-lg"></i>&nbsp;Add slide
                            </div>
                        </div>
                        <div id='leftSidePanel' className='leftSidePanel'>
                            Loading panel ...
                        </div>
                    </div>
                `);
            }
        }
    }
}

export = LeftPanel;