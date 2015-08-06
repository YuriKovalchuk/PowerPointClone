///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../../DAL/Model/Backbone.Models/Slide', '../../DAL/Model/Backbone.Models/SlideCollection', '../../Utils/EmitterWrapper', '../../Enums/EventNames'], function (require, exports, React, SlideModule, SlideCollectionModule, EmitterModule, EventNamesModule) {
    var Slide = SlideModule.Slide;
    var SlideCollection = SlideCollectionModule.SlideCollection;
    var EventEmitter = EmitterModule.EmitterWrapper;
    var EventNames = EventNamesModule.EventNames;
    var LeftPanel;
    (function (LeftPanel_1) {
        var LeftPanel = (function (_super) {
            __extends(LeftPanel, _super);
            function LeftPanel() {
                _super.apply(this, arguments);
                this.state = {
                    deleted: false,
                    hasData: false,
                    model: new SlideCollection()
                };
                this.clicked = false;
                this.selectedSlide = new Slide();
                this.slideCollection = new SlideCollection();
            }
            LeftPanel.prototype.updateSlide = function (slide) {
                var collection = this.state.model;
                //update
                var newSlide = collection.findWhere({ Id: slide.get('Id') });
                newSlide.set('Title', slide.get('Title'));
                newSlide.set('SlideType', slide.get('SlideType'));
                newSlide.set('Content', slide.get('Content'));
                newSlide.set('ImageUrl', slide.get('ImageUrl'));
                this.setState({
                    hasData: true,
                    model: collection
                });
            };
            LeftPanel.prototype.componentWillMount = function () {
                var _this = this;
                var self = this;
                EventEmitter.Emitter.on(EventNames.StageSave, function (slide) { return _this.updateSlide(slide); }, this);
                this.slideCollection.fetch({
                    url: "http://localhost:53840/api/slides",
                    success: function () {
                        var slide = self.slideCollection.at(0);
                        self.selectedSlide = slide;
                        EventEmitter.Emitter.trigger(EventNames.LeftSidePanelItemSelected, self.selectedSlide);
                        self.selectedSlide.set({
                            Selected: true
                        });
                    }
                });
            };
            LeftPanel.prototype.componentDidMount = function () {
                this.slideCollection.on("sync", function () {
                    this.setState({
                        hasData: true,
                        model: this.slideCollection
                    });
                }, this);
            };
            LeftPanel.prototype.componentDidUpdate = function () {
                if (this.clicked) {
                    this.scrollDown();
                    this.clicked = false;
                }
            };
            LeftPanel.prototype.scrollDown = function () {
                var panel = document.getElementById('leftSidePanel');
                panel.scrollTop = panel.scrollHeight;
            };
            LeftPanel.prototype.clickAddSlide = function () {
                var newSlide = new Slide();
                this.slideCollection.create(newSlide, { url: "http://localhost:53840/api/slides" });
                this.selectedSlide = this.slideCollection.at(this.slideCollection.length - 1);
                this.selectedSlide.set({
                    Selected: true
                });
                this.setState({
                    model: this.slideCollection
                });
                //TODO raise event
                //LeftPanel.Emitter.trigger('xxx', newSlide);
                EventEmitter.Emitter.trigger(EventNames.LeftSidePanelItemSelected, this.selectedSlide);
                this.clicked = true;
            };
            LeftPanel.prototype.clickDeleteSlide = function (id) {
                var slideCollection = new SlideCollection();
                var currentSlide = new Slide();
                var self = this;
                slideCollection = this.state.model;
                currentSlide.fetch({
                    url: 'http://localhost:53840/api/slides/' + id,
                    error: function (err) {
                        console.log('error ' + err);
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
                                    });
                                }
                                slideCollection.remove(currentSlide);
                                self.setState({
                                    model: slideCollection,
                                });
                            },
                            error: function (err) {
                                console.log('error destroy ' + err);
                            }
                        });
                    }
                });
            };
            LeftPanel.prototype.handleSelectSlide = function (id) {
                this.selectedSlide = this.slideCollection.findWhere({ Id: id });
                this.selectedSlide.set({
                    Selected: true
                });
                //notify selection
                EventEmitter.Emitter.trigger(EventNames.LeftSidePanelItemSelected, this.selectedSlide);
                this.setState({
                    model: this.slideCollection
                });
            };
            LeftPanel.prototype.resetSelectedAttribute = function (slide) {
                if (slide.get('Id') != this.selectedSlide.get('Id') && slide.get('Selected') === true) {
                    slide.set({ Selected: false });
                }
                return slide;
            };
            LeftPanel.prototype.render = function () {
                console.log('Rendering left panel...');
                var self = this;
                var data = [];
                var h = this.handleSelectSlide.bind(this);
                this.state.model.forEach(function (s) {
                    s = self.resetSelectedAttribute(s);
                    data.push(React.jsx("\n                    <PanelRow deleted={this.state.deleted} \n                        slide={s} \n                        index={this.state.model.indexOf(s)+1}  \n                        clickDeleteUpdatePanel={this.clickDeleteSlide.bind(this, s.get('Id'))} \n                        handleSelectSlide={this.handleSelectSlide.bind(this)} />\n                "));
                }, this);
                if (this.state.hasData) {
                    return React.jsx("\n                    <div>\n                        <div className='header' >\n                            <div className='header left'> Slides </div>\n                            <div className='header right' onClick={this.clickAddSlide.bind(this)}>\n                                <i className=\"fa fa-plus-square fa-lg\"></i>&nbsp;Add slide\n                            </div>\n                        </div>\n                        <div id='leftSidePanel' className='leftSidePanel'>\n                            {data}\n                        </div>\n                    </div>\n                ");
                }
                else {
                    return React.jsx("\n                    <div>\n                        <div className='header' >\n                            <div className='header left'> Slides </div>\n                            <div className='header right' onClick={this.clickAddSlide.bind(this)}>\n                                <i className=\"fa fa-plus-square fa-lg\"></i>&nbsp;Add slide\n                            </div>\n                        </div>\n                        <div id='leftSidePanel' className='leftSidePanel'>\n                            Loading panel ...\n                        </div>\n                    </div>\n                ");
                }
            };
            return LeftPanel;
        })(React.Component);
        LeftPanel_1.LeftPanel = LeftPanel;
    })(LeftPanel || (LeftPanel = {}));
    return LeftPanel;
});
//# sourceMappingURL=LeftPanel.js.map