///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage() {
            _super.apply(this, arguments);
        }
        Stage.prototype.render = function () {
            var stageSlideValue;
            var slideType = this.props.changedSlideType;
            switch (slideType) {
                case 'TitleOnly':
                    stageSlideValue = React.jsx("<StageSlideTitleOnly />");
                    break;
                case 'TitleWithImage':
                    stageSlideValue = React.jsx("<StageSlideTitleWithImage />");
                    break;
                case 'TitleWithText':
                    stageSlideValue = React.jsx("<StageSlideTitleWithText />");
                    break;
                default:
                    stageSlideValue = React.jsx("<StageSlideTitleOnly />");
                    //throw new Error("Invalid slide type!");
                    break;
            }
            return React.jsx("\n            <div className=\"row panel\">\n                <div className=\"stage\">\n                    {stageSlideValue}\n                </div>\n            </div>\n         ");
        };
        return Stage;
    })(React.Component);
    return Stage;
});
//# sourceMappingURL=stage.js.map