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
        }
        Main.prototype.render = function () {
            return React.jsx("\n<div>\t\n\t<nav className=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div className=\"container\">\n            <div className=\"navbar-header\">\n                <button type=\"button\" className=\"navbar-toggle\">\n                    <span className=\"sr-only\">Toggle navigation</span>\n                    <span className=\"icon-bar\"></span>\n                    <span className=\"icon-bar\"></span>\n                    <span className=\"icon-bar\"></span>\n                </button>\n                <a className=\"navbar-brand\" href=\"#\">Powerpoint Clone</a>\n            </div>\n            <div className=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul className=\"nav navbar-nav\">\n                    <li>\n                        <a href=\"#\">Menu Item 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Menu Item 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Menu Item 3</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div className=\"container\">\n        <div className=\"row\">\n            <div className=\"col-lg-2\">\n                <div id=\"leftSideMenuWrapper\">\n                    left panel\n                </div>\n            </div>\n            <div className=\"col-lg-8 main-body\">\n                <Stage />\n            </div>\n            <div className=\"col-lg-2\">\n                right panel\n            </div>\n        </div>\n    </div>\n</div>\n         ");
        };
        return Main;
    })(React.Component);
    return Main;
});
//# sourceMappingURL=main.js.map