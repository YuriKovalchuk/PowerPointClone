///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var RightSidePanel;
    (function (RightSidePanel_1) {
        var RightSidePanel = (function (_super) {
            __extends(RightSidePanel, _super);
            function RightSidePanel() {
                _super.apply(this, arguments);
            }
            RightSidePanel.prototype.changeLayoutClickHandler = function (slideType) {
                this.props.changeLayoutClick(slideType);
            };
            RightSidePanel.prototype.render = function () {
                return React.jsx("\n                <div className=\"panel height700\">\n                    <div className=\"row\">\n                        <div className=\"col-xs-12\">\n                            <div className=\"header\">\n                                Layouts\n                            </div>\n                        </div>\n                    </div>\n                    <div className=\"row\">\n                        <div className=\"col-xs-12\">\n                            <div className=\"slide-base center-block space-top100 space-bottom20\" onClick={this.changeLayoutClickHandler.bind(this,0)}>\n                                <div className=\"title-placeholder center-block space-top55\"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div className=\"row\">\n                        <div className=\"col-xs-12\">\n                            <div className=\"slide-base center-block space-bottom20\" onClick={this.changeLayoutClickHandler.bind(this,2)}>\n                                <div className=\"title-placeholder center-block space-top10\"></div>\n                                <div className=\"text-body-placeholder center-block space-top10\"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div className=\"row\">\n                        <div className=\"col-xs-12\">\n                            <div className=\"slide-base center-block space-bottom20\" onClick={this.changeLayoutClickHandler.bind(this,1)}>\n                                <div className=\"title-placeholder center-block space-top10\"></div>\n                                <div className=\"text-body-placeholder center-block space-top10\">\n                                    <img src=\"http://placekitten.com/g/150/80\" title=\"Image\" className=\"right-side-image\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");
            };
            return RightSidePanel;
        })(React.Component);
        RightSidePanel_1.RightSidePanel = RightSidePanel;
    })(RightSidePanel || (RightSidePanel = {}));
    return RightSidePanel;
});
//# sourceMappingURL=rightSidePanel.js.map