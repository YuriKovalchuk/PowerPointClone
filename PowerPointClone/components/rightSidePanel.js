///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../DAL/Model/Backbone.Models/LayoutsCollection', '../utils/EventEmiter', '../Enums/EventNames'], function (require, exports, React, LayoutsModule, EmiterModule, EnumsModule) {
    var LayoutsCollection = LayoutsModule.LayoutsCollection;
    var Emitter = EmiterModule.EventEmiter;
    var EventNamesEnum = EnumsModule.EventNames;
    var RightSidePanel;
    (function (RightSidePanel_1) {
        var RightSidePanel = (function (_super) {
            __extends(RightSidePanel, _super);
            function RightSidePanel() {
                _super.apply(this, arguments);
            }
            RightSidePanel.prototype.componentWillMount = function () {
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
            };
            RightSidePanel.prototype.changeLayoutClickHandler = function (slideType) {
                RightSidePanel.Emitter.trigger(EventNamesEnum.RightSidePanelClick, slideType);
            };
            RightSidePanel.prototype.render = function () {
                var innerComponent;
                var row;
                var rows = [];
                var hasText = false;
                var hideImageClass = "";
                var hideTextClass = "";
                var centerTitleClass = "";
                var isFirstSlideClass = "";
                if (this.state == null) {
                    innerComponent = React.jsx("\n                    <div>\n                        <div>\n                            <img src=\"photos/294.GIF\" className=\"preloader space-top100\" />\n                        </div>\n                    </div>\n                ");
                }
                else {
                    for (var i = 0; i < this.state.LayoutsList.models.length; i++) {
                        var current = this.state.LayoutsList.models[i];
                        isFirstSlideClass = i == 0 ? 'slide-base center-block space-top100 space-bottom20' : 'slide-base center-block space-bottom20';
                        hideImageClass = current.get('HasImage') == true ? 'text-body-placeholder center-block space-top10' : ' text-body-placeholder center-block space-top10 hidden';
                        hideTextClass = current.get('HasText') == true ? 'text-body-placeholder center-block space-top10' : 'text-body-placeholder center-block space-top10 hidden';
                        centerTitleClass = (current.get('HasText') == false) && (current.get('HasImage') == false) ? centerTitleClass = 'title-placeholder center-block space-top55' : 'title-placeholder center-block space-top10';
                        row = React.jsx("\n                                <div className=\"col-xs-12\">\n                                    <div className={isFirstSlideClass} onClick={this.changeLayoutClickHandler.bind(this,{i})}>\n                                        <div className={centerTitleClass}></div>\n                                        <div className={hideTextClass}></div>\n                                        <div className={hideImageClass}>\n                                            <img src=\"http://placekitten.com/g/150/80\" title=\"Image\" className=\"right-side-image\" />\n                                        </div>\n                                    </div>\n                                </div>\n                        ");
                        rows.push(row);
                    }
                    innerComponent = React.jsx("\n                    <div>\n                          {rows}\n                    </div>\n                ");
                }
                return React.jsx("\n                <div className=\"panel height700\">\n                    <div className=\"row\">\n                        <div className=\"col-xs-12\">\n                            <div className=\"header\">\n                                Layouts\n                            </div>\n                        </div>\n                    </div>\n                    {innerComponent}\n                </div>\n            ");
            };
            RightSidePanel.Emitter = new Emitter();
            return RightSidePanel;
        })(React.Component);
        RightSidePanel_1.RightSidePanel = RightSidePanel;
    })(RightSidePanel || (RightSidePanel = {}));
    return RightSidePanel;
});
//# sourceMappingURL=rightSidePanel.js.map