///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var PanelSlide = (function (_super) {
        __extends(PanelSlide, _super);
        function PanelSlide() {
            _super.apply(this, arguments);
        }
        PanelSlide.prototype.render = function () {
            return React.jsx("\n            <div className='panelSlide'>\n                {this.props.title}\n            </div>\n        ");
        };
        return PanelSlide;
    })(React.Component);
    var PanelRow = (function (_super) {
        __extends(PanelRow, _super);
        function PanelRow() {
            _super.apply(this, arguments);
        }
        PanelRow.prototype.render = function () {
            return React.jsx("\n            <div className='panelRow'>\n                <span className='slideId'> {this.props.slide.id} </span>\n                <PanelSlide title={this.props.slide.title}/>\n            </div>\n        ");
        };
        return PanelRow;
    })(React.Component);
    var LeftPanel = (function (_super) {
        __extends(LeftPanel, _super);
        function LeftPanel() {
            _super.apply(this, arguments);
        }
        LeftPanel.prototype.render = function () {
            var data = [];
            this.props.slides.forEach(function (s) {
                data.push(React.jsx("\n                <PanelRow slide={s} />\n            "));
            });
            return React.jsx("\n            <div className='leftSidePanel'>\n                {data}\n            </div>\n        ");
        };
        return LeftPanel;
    })(React.Component);
    return LeftPanel;
});
//# sourceMappingURL=leftSidePanel.js.map