///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var LeftSidePanel = (function (_super) {
        __extends(LeftSidePanel, _super);
        function LeftSidePanel() {
            _super.apply(this, arguments);
        }
        LeftSidePanel.prototype.changeLayoutClickHandler = function (slideType) {
            this.props.changeLayoutClick(slideType);
        };
        LeftSidePanel.prototype.render = function () {
            var imageStyling = {
                width: "150px",
                height: "80px",
                position: "relative",
                left: "0px"
            };
            return React.jsx("\n            <div className=\"panel\">\n                <div className=\"row\">\n                    <div className=\"col-xs-12\">\n                        <div className=\"header\">\n                            Layouts\n                        </div>\n                    </div>\n                </div>\n                <div className=\"row\">\n                    <div className=\"col-xs-12\">\n                        <div className=\"slide-base center-block space-top10 space-bottom10\" onClick={this.changeLayoutClickHandler.bind(this,'TitleOnly')}>\n                            <div className=\"title-placeholder center-block space-top55\"></div>\n                            <input type=\"hidden\" value=\"TitleOnly\" ref=\"SlideType\" />\n                        </div>\n                    </div>\n                </div>\n                <div className=\"row\">\n                    <div className=\"col-xs-12\">\n                        <div className=\"slide-base center-block\" onClick={this.changeLayoutClickHandler.bind(this,'TitleWithText')}>\n                            <div className=\"title-placeholder center-block space-top10\" ></div>\n                            <div className=\"text-body-placeholder center-block space-top10\"></div>\n                            <input type=\"hidden\" value=\"TitleWithText\" ref=\"SlideType\" />\n                        </div>\n                    </div>\n                </div>\n                <div className=\"row\">\n                    <div className=\"col-xs-12\">\n                        <div className=\"slide-base center-block space-top10 space-bottom10\" onClick={this.changeLayoutClickHandler.bind(this,'TitleWithImage')}>\n                            <div className=\"title-placeholder center-block space-top10\"></div>\n                            <div className=\"text-body-placeholder center-block space-top10\">\n                                <img src=\"http://placekitten.com/g/150/80\" title=\"Image\" style={imageStyling}/>\n                            </div>\n                            <input type=\"hidden\" value=\"TitleWithImage\" ref=\"SlideType\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
        };
        return LeftSidePanel;
    })(React.Component);
    return LeftSidePanel;
});
//# sourceMappingURL=rightSidePanel.js.map