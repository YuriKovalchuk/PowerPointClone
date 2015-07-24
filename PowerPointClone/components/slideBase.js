///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var SlideBase = (function (_super) {
        __extends(SlideBase, _super);
        function SlideBase() {
            _super.apply(this, arguments);
            this.state = {
                name: "testAlex"
            };
        }
        SlideBase.prototype.render = function () {
            return React.jsx("\n            <div>\n\t            {this.state.name}\n            </div>\n         ");
        };
        return SlideBase;
    })(React.Component);
    return SlideBase;
});
//# sourceMappingURL=slideBase.js.map