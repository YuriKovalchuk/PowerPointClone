///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../../DAL/RepositoryManager'], function (require, exports, React, SingletonModule) {
    var RepositoryManager = SingletonModule.RepositoryManager;
    var PanelRow;
    (function (PanelRow_1) {
        var PanelRow = (function (_super) {
            __extends(PanelRow, _super);
            function PanelRow() {
                _super.apply(this, arguments);
                this.repository = RepositoryManager.GetInstance();
            }
            PanelRow.prototype.handleSelectSlide = function (id) {
                this.props.handleSelectSlide(id);
            };
            ;
            PanelRow.prototype.clickDeleteSlide = function (id) {
                var currentSlide = this.repository.GetSlide(id);
                this.repository.Delete(currentSlide);
                this.props.clickDeleteUpdatePanel();
            };
            ;
            PanelRow.prototype.render = function () {
                var style;
                if (this.props.slide.selected) {
                    style = 'panelRow selected';
                }
                else {
                    style = 'panelRow';
                }
                return React.jsx("\n                <div className={style} >\n                    <div className='slideId'> {this.props.slide.index} </div>\n                    <div className='delButton' onClick={this.clickDeleteSlide.bind(this, this.props.slide.id) } > \n                        <i className=\"fa fa-trash-o fa-3\"></i>\n                    </div>\n                    <PanelSlide slide={this.props.slide} handleSelectSlide={this.handleSelectSlide.bind(this)}/>\n                </div>\n            ");
            };
            return PanelRow;
        })(React.Component);
        PanelRow_1.PanelRow = PanelRow;
    })(PanelRow || (PanelRow = {}));
    return PanelRow;
});
//# sourceMappingURL=PanelRow.js.map