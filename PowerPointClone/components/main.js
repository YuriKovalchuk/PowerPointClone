///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
            this.state = {
                changedSlideType: '',
                content: ''
            };
        }
        Main.prototype.changeLayoutClickHandler = function (slideType) {
            this.setState({ changedSlideType: slideType });
        };
        Main.prototype.changeStageContentHandler = function (slideId) {
            console.log('Changing the state ' + slideId);
            this.setState({ content: 'Changing the state ' + slideId });
        };
        Main.prototype.render = function () {
            return React.jsx("\n<div>\t\n\t<nav className=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div className=\"container\">\n            <div className=\"navbar-header\">\n                <button type=\"button\" className=\"navbar-toggle\">\n                    <span className=\"sr-only\">Toggle navigation</span>\n                    <span className=\"icon-bar\"></span>\n                    <span className=\"icon-bar\"></span>\n                    <span className=\"icon-bar\"></span>\n                </button>\n                <a className=\"navbar-brand\" href=\"#\">Powerpoint Clone</a>\n            </div>\n            <div className=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul className=\"nav navbar-nav\">\n                    <li>\n                        <a href=\"#\">Menu Item 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Menu Item 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Menu Item 3</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div className=\"container\">\n        <div className=\"row\">\n            <div className=\"col-md-2\">\n                <div id=\"leftSideMenuWrapper\">\n                    <LeftPanel.LeftPanel slides={Data} changeStageClickHandler={this.changeStageContentHandler.bind(this)} />\n                </div>\n            </div>\n            <div className=\"col-md-8 main-body\">\n                <Stage changedSlideType={this.state.changedSlideType} />\n            </div>\n            <div className=\"col-md-2\">\n                <RightSidePanel changeLayoutClick={this.changeLayoutClickHandler.bind(this)} />\n            </div>\n        </div>\n    </div>\n</div>\n         ");
        };
        return Main;
    })(React.Component);
    var Data = [
        { id: '1', title: 'Test1' },
        { id: '2', title: 'Test2' },
        { id: '3', title: 'Test3' },
        { id: '4', title: 'Test4' },
        { id: '5', title: 'Test5' },
        { id: '6', title: 'Test6' },
        { id: '7', title: 'Test7' },
        { id: '8', title: 'Test8' }
    ];
    return Main;
});
//# sourceMappingURL=main.js.map