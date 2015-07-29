///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var PanelRow;
    (function (PanelRow_1) {
        var PanelRow = (function (_super) {
            __extends(PanelRow, _super);
            function PanelRow() {
                _super.apply(this, arguments);
            }
            PanelRow.prototype.handleSlideClick = function (id) {
                console.log('test in Panel Row');
                this.props.changeStageClickHandler(id);
            };
            ;
            PanelRow.prototype.render = function () {
                var id = this.props.slide.id;
                return React.jsx("\n                <div className='panelRow' onClick={this.handleSlideClick.bind(this, id)}>\n                    <div className='slideId'> {this.props.slide.id} </div>\n                    <div className='delButton'> \n                        <i className=\"fa fa-trash-o fa-3\"></i>\n                    </div>\n                    <PanelSlide title={this.props.slide.title}/>\n                </div>\n            ");
            };
            return PanelRow;
        })(React.Component);
        PanelRow_1.PanelRow = PanelRow;
    })(PanelRow || (PanelRow = {}));
    return PanelRow;
});
//# sourceMappingURL=PanelRow.js.map