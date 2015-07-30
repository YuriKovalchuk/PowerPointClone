///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var PanelSlide;
    (function (PanelSlide_1) {
        var PanelSlide = (function (_super) {
            __extends(PanelSlide, _super);
            function PanelSlide() {
                _super.apply(this, arguments);
            }
            PanelSlide.prototype.clickOnSlide = function () {
            };
            ;
            PanelSlide.prototype.render = function () {
                return React.jsx("\n                <div className='panelSlide' onClick={this.clickOnSlide.bind(this)} >\n                    {this.props.title}\n                </div>\n            ");
            };
            return PanelSlide;
        })(React.Component);
        PanelSlide_1.PanelSlide = PanelSlide;
    })(PanelSlide || (PanelSlide = {}));
    return PanelSlide;
});
//# sourceMappingURL=PanelSlide.js.map