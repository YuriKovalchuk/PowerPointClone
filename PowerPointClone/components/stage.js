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
            var divStyle = {
                height: '700px',
                border: '1px solid #ccc'
            };
            return React.jsx("\n            <div className=\"row panel\">\n                <div className=\"stage\">\n                    {this.props.name}\n                    <StageSlide />\n                </div>\n            </div>\n         ");
        };
        return Stage;
    })(React.Component);
    return Stage;
});
//# sourceMappingURL=stage.js.map