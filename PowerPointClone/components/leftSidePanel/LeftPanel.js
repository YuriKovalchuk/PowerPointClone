///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var LeftPanel;
    (function (LeftPanel_1) {
        var LeftPanel = (function (_super) {
            __extends(LeftPanel, _super);
            function LeftPanel() {
                _super.apply(this, arguments);
            }
            LeftPanel.prototype.changeStageClickHandler = function (id) {
                this.props.changeStageClickHandler(id);
                console.log('test in LeftPanel');
            };
            ;
            LeftPanel.prototype.render = function () {
                var data = [];
                var f = this.changeStageClickHandler.bind(this);
                this.props.slides.forEach(function (s) {
                    data.push(React.jsx("\n                    <PanelRow.PanelRow slide={s} changeStageClickHandler={f} />\n                "));
                });
                return React.jsx("\n            <div className='leftSidePanel'>\n                {data}\n            </div>\n        ");
            };
            return LeftPanel;
        })(React.Component);
        LeftPanel_1.LeftPanel = LeftPanel;
    })(LeftPanel || (LeftPanel = {}));
    return LeftPanel;
});
//# sourceMappingURL=LeftPanel.js.map